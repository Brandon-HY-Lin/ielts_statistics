import pandas as pd
import numpy as np
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt
import os

data_dir='./data/'
SEED=0
ADD_MU_SIGMA=False
SAVE_FIG=True

weights = np.array([2, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9])


def get_file_iter(data_dir):
    for dirpath, dirnames, filenames in os.walk(data_dir):
        for filename in filenames:
            if filename.endswith('tsv'):
                yield(os.path.join(dirpath, filename))


def get_title(f):
    # remove dir
    name = os.path.basename(f)
    # remove extension
    name = os.path.splitext(name)[0]
    tokens = name.split('_')[1:]

    
    title = ""
    for index, t in enumerate(tokens):
        if (index == 0):
            title = t + " - "
        else:
            title = title + t + " "

    return title

def read_file(f):
    # read file
    df = pd.read_csv(f, sep='\t')
    
    # replace NAN with 0
    df = df.fillna(0)
    
    # discard first col (comment) and convert to numpy
    comments = df.iloc[:,0].values
    dataset = df.iloc[:, 1:].values

    return (comments, dataset)


def get_embedding(dataset):
    # perform embedding
    Z = TSNE(perplexity=5, random_state=SEED).fit_transform(dataset)
    return Z


def get_mean(dataset, keepdims=False):
    return np.sum(weights * dataset, axis=1, keepdims=keepdims) / 100.0


def get_std(dataset, keepdims=False):
    mu = get_mean(dataset, keepdims=True)
    err_squared = (mu - weights) ** 2
    weighted_err_squared = np.sum(err_squared * dataset, axis=1, keepdims=keepdims) / (100.0 - 1.0)

    return np.sqrt(weighted_err_squared)


def perform_t_sne(f):
    (comments, dataset) = read_file(f)
    Z = get_embedding(dataset)
    return (Z, comments, dataset)


if __name__ == '__main__':

    file_iter = get_file_iter(data_dir)
    

    for index, f in enumerate(file_iter):
        Z, comments, dataset = perform_t_sne(f)

        mu = get_mean(dataset)
        std = get_std(dataset)

        title = get_title(f)

        fig = plt.figure(index, figsize=(10, 10))
        plt.scatter(Z[:,0], Z[:,1], c=np.arange(len(Z)), alpha=0.5)
        plt.title(title)
    
        for i, z in enumerate(Z):
            if ADD_MU_SIGMA == True:
                annot = "{}\n$\mu$:{:1.2f},$\sigma$:{:1.2f}".format(comments[i], mu[i], std[i])
            else:
                annot = "{}".format(comments[i])

            plt.annotate(annot, xy=z+[2.0, -1.0], alpha=0.8, fontsize=8.0)


        fig.show()

        if SAVE_FIG == True:
            fig_name = 'figures/fig-{}.png'.format(title)
            fig.savefig(fig_name, dpi=320)


