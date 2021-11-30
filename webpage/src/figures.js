const figures = {
    "F1": {
        "image": "./figures/face-relationships.png",
        "caption": "Example face pairs of each of the 11 relationship type in the FIW dataset: (i) Three sibling pairs: Brother-Brother(BB), Sister-Sister(SS), Brother-Sister(SIBS) (bottomleft column); (ii) Four parent-child pairs: Father-Daughter(FD), Father-Son(FS), Mother-Daughter(MD), Mother-Son(MS) (center  column); (iii) Four granparent-grandchildpairs: Grandfather-Granddaughter(GFGD), Grandfather-Grandson(GFGS), Grandmother-Granddaughter(GMGD), Grandmother-Grandson(GMGS) (right  column); and Non-kin (top left column).",
        "width": "80%",
        "maxWidth": "800px"
    },
    "F2": {
        "image": "./figures/architecture.png",
        "caption": "System architecture: We use multiple deep Siamese networks. A pair of images for verification are fed through a pre-trained convolutional backbone. The backbones project the images into a latent feature space which are flattened and then combined by feature fusion. The result of the feature fusion is fed through a fully connected network in which the final layer is a single binary classification predicting kin or non-kin. We ensemble multiple Siamese networks written by both human experts and OpenAI Codex.",
        "width": "80%"
    }
};

export default figures;