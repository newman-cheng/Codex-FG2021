const tables = {
    "1": {
        "tex": `\textbf{Week} & \textbf{Topic} & \textbf{Exp. Acc. ORQ} & \textbf{Acc. ORQ} & \textbf{Acc. MCQ} \\
        \hline
        \hline
            1 & Basics & 1.00 & 1.00 & 1.00\\
            2 & Perceptrons & 0.98 & 0.98 & 0.98\\
            3 & Features & 0.86 & 0.86 & 0.89\\
            4 & Logistic regression & 0.86 & 0.86 & 0.90\\
            5 & Regression & 0.97 & 0.97 & 0.97\\
            6 & Neural networks I & 1.00 & 1.00 & 1.00\\
            7 & Neural networks II & 0.97 & 0.97 & 0.98\\
            8 & Convolutional neural networks & 0.84 & 0.86 & 0.89\\
            9 & Recurrent neural networks & 1.00 & 1.00 & 1.00\\
            10 & State machines and MDPs & 0.94 & 1.00 & 1.00\\
            11 & Reinforcement learning & 1.00 & 1.00 & 1.00\\
            12 & Decision trees & 1.00 & 1.00 & 1.00\\
            \hline
            & Overall average over topics & 0.95 & 0.96 & 0.97`,
        "caption": "Accuracy achieved using our system for each topic taught in MIT's Introduction to Machine Learning course, 6.036. Our system demonstrates an overall average expression accuracy (percent of correct expressions) of 95% and value accuracy (percent of correct values) of 96% for open response questions (ORQ), and accuracy (percent of correct values) of 97% for multiple-choice questions (MCQ), achieving grade A performance in real-time.",
        "width": "80%"
    },
    "5": {
        "tex": `\textbf{Week} & \textbf{Topic} & \textbf{Our Model} & \textbf{Our Model without GNN} & \textbf{GPT-3} \\
        \hline
        \hline
            1 & Basics & 1.00 & 0.50 & 0.00\\
            2 & Perceptrons & 1.00 & 0.95 & 0.20\\
            3 & Features & 0.65 & 0.50 & 0.00\\
            4 & Logistic regression & 0.70 & 0.50 & 0.20\\
            5 & Regression & 1.00 & 0.75 & 0.10\\
            6 & Neural networks I & 1.00 & 0.95 & 0.00\\
            7 & Neural networks II & 1.00 & 0.90 & 0.00\\
            8 & Convolutional neural networks & 0.90 & 0.95 & 0.00\\
            9 & Recurrent neural networks & 1.00 & 1.00 & 0.20\\
            10 & State machines and MDPs & 1.00 & 1.00 & 0.10\\
            11 & Reinforcement learning & 1.00 & 1.00 & 0.00\\
            12 & Decision trees & 1.00 & 0.90 & 0.00\\
            \hline
            & Overall average over topics & 0.94 & 0.83 & 0.07\\`,
        "caption": "A comparison of the ORQ performance of our model vs. our model without GNN vs. GPT-3.",
        "width": "80%"
    },
    "6": {
        "tex": `& & \multicolumn{6}{c|}{\textbf{Augmentations per Question}} :dh: \textbf{Week} & \textbf{Topic} & \textbf{100} & \textbf{50} & \textbf{25} & \textbf{13} & \textbf{6} & \textbf{3} \\
        \hline
        \hline
            1 & Basics                        & 1.00 & 0.42 & 0.11 & 0.01 & 0.07 & 0.00\\
            2 & Perceptrons                   & 0.98 & 0.71 & 0.35 & 0.22 & 0.22 & 0.07\\
            3 & Features                      & 0.86 & 0.61 & 0.36 & 0.11 & 0.07 & 0.00\\
            4 & Logistic regression           & 0.86 & 0.76 & 0.12 & 0.02 & 0.00 & 0.02\\
            5 & Regression                    & 0.97 & 0.64 & 0.30 & 0.05 & 0.00 & 0.00\\
            6 & Neural networks I             & 1.00 & 0.86 & 0.34 & 0.01 & 0.05 & 0.06\\
            7 & Neural networks II            & 0.97 & 0.91 & 0.13 & 0.02 & 0.01 & 0.00\\
            8 & Convolutional neural networks & 0.86 & 0.91 & 0.54 & 0.12 & 0.06 & 0.04\\
            9 & Recurrent neural networks     & 1.00 & 0.61 & 0.23 & 0.00 & 0.05 & 0.00\\
            10 & State machines and MDPs     & 1.00 & 0.95 & 0.26 & 0.12 & 0.13 & 0.00\\
            11 & Reinforcement learning       & 1.00 & 1.00 & 0.64 & 0.00 & 0.02 & 0.00\\
            12 & Decision trees               & 1.00 & 0.80 & 0.60 & 0.00 & 0.00 & 0.00\\
            \hline
            & Overall average over topics & 0.96 & 0.77 & 0.33 & 0.06 & 0.06 & 0.02\\`,
        "caption": "A comparison of the ORQ performance of our model vs. our model without GNN vs. GPT-3.",
        "width": "80%"
    }
};

export default tables;