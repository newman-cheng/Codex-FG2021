const tables = {
    "1": {
        "tex": `\begin{table}[t!]
\small
\centering
\begin{tabular}{|l|c|} 
\hline
\textbf{Model} & \textbf{Accuracy}\\  
\hline
Ensembling multiple instances  &\\ 
of multiple models & 0.741\\
\hline
Ensembling multiple instances &\\ 
of one model & 0.726\\
\hline
Adding $|x_{1}^{2}-x_{2}^{2}|$ to the concatenated features& \\
Test time data augmentation & 0.730\\
\hline
Adding batch normalization layers & \\
and improving sampling & 0.685 \\
\hline
Adding dropout layers & 0.633\\
\hline
Adding training pairs & 0.579\\ 
\hline
Adding a dropout layer & 0.525\\
\hline
Baseline model & 0.510\\
\hline
\end{tabular}
\end{table}`,
        "caption": "Human ablation study: A ranking of different methods that we use to improve our models. Multiple ablation experiments are performed on a smaller dataset consisting of 5,045 training images and 4,437 test images for faster turnaround time. Each improvement in ranking represents an enhancement on top of the prior model. The best performing method consisted of an ensemble of multiple models with different architectures.",
        "width": "80%"
    },
    "5": {
        "tex": `\begin{table*}[t!]
    \scriptsize
    \centering
    \begin{tabular}{|lc|c|ccc|cccc|cccc|} 
    \hline
    \textbf{User} & \textbf{Year} & \textbf{Avg.} & \textbf{BB} & \textbf{SIBS} & \textbf{SS} & \textbf{FD} & \textbf{FS} & \textbf{MD} & \textbf{MS} & \textbf{GFGD} & \textbf{GFGS} & \textbf{GMGD} & \textbf{GMGS}\\
    \hline
zxm123 & 2021 &	0.80 (1)&  0.82 (1)&	0.80 (1)&	0.84 (1)&	0.75 (4)&	0.82 (1)&	0.80 (1)&	0.77 (2)&	0.76 (3)&	0.71 (4)&	0.75 (2)&	0.59 (10)\\
vuvko &	2020 & 0.78 (2)&	0.80 (2)&	0.77 (2)&	0.80 (2)&	0.75 (7)&	0.81 (5)&	0.78 (2) &	0.74 (7) & 0.78 (2)&	0.69 (6)&	0.76 (1)&	0.60 (9)\\
\textbf{nc2893} & 2021 & 0.77 (3)&	0.79 (3)&	0.75 (4)&	0.79 (3)&	0.76 (2)&	0.78 (12)&	0.75 (7)&	0.74 (9)&	0.70 (15)&	0.67 (9)&	0.70 (8)&	0.59 (10)\\
\textbf{jh3450} & 2021 & 0.77 (3)&	0.79 (3)&	0.75 (4)&	0.79 (3)&	0.76 (2)&	0.78 (12)&	0.75 (7)&   0.74 (9)&	0.70 (15)&	0.67 (9)&	0.70 (8)&	0.59 (10)\\
\textbf{paw2140} & 2021 & 0.77 (4)&	0.78 (4)&	0.75 (5)&	0.79 (4)&	0.75 (6)&	0.78 (12)&	0.76 (4)&	0.74 (8)&	0.68 (18)&	0.69 (7)&	0.72 (5)&	0.59 (10)\\
DeepBlueAI & 2020 & 0.76 (5)&	0.77 (5)&	0.75 (6)&	0.77 (5)&	0.74 (8)&	0.81 (6)&	0.75 (6)& 0.74 (10) & 0.72 (7)&	0.73 (3)&	0.67 (11)&	0.68 (1)\\
ustc-nelslip & 2021 & 0.76 (6)&	0.75 (6)&	0.72 (9)&	0.74 (8)&	0.76 (3)&	0.82 (2)&	0.75 (8) & 0.75 (4) & 0.79 (1)&	0.69 (7)&	0.76 (1)&	0.67 (2)\\
\hline
\end{tabular}
\end{table}`,
        "caption": "RFIW kinship verification accuracy scores of top 7 entries in 2020-2021. The Table shows accuracy for each of the 11 types of relationships (three sibling pairs BB, SIBS, SS; four parent-child FD, FS, MD, MS; and four grandparent-grandchild relationships GFGD, GFGS, GMGD, GMGS) and the average accuracy. Our top 3 entries in the competition are shown in bold.",
        "width": "80%"
    },
    "6": {
        "tex": `\begin{table*}[t!]
    \centering
    \begin{tabular}{|l|c|ccc|cccc|}
    \hline
    \textbf{Method} & \textbf{Average} & \textbf{BB} & \textbf{SIBS} & \textbf{SS} & \textbf{FD} & \textbf{FS} & \textbf{MD} & \textbf{MS}\\
    \hline
Ensemble & 0.77 & 0.80 & 0.77 & 0.80 & 0.74 & 0.76 & 0.77 & 0.75\\
\hline
Codex model variant 1 & 0.75 & 0.78 & 0.75 & 0.78 & 0.71 & 0.73 & 0.75 & 0.72\\
Codex model variant 2 & 0.76 & 0.80 & 0.76 & 0.79 &	0.72 & 0.76 & 0.76 & 0.72\\ 
\hline
Human model variant 1 & 0.75 & 0.78 & 0.74 & 0.78 & 0.73 & 0.75 & 0.75 & 0.73\\ 
Human model variant 2 & 0.76 & 0.79 & 0.76 & 0.79 & 0.75 & 0.77 & 0.75 & 0.75\\
\hline
\end{tabular}
\end{table}`,
        "caption": "RFIW kinship verification accuracy scores of our ensemble, Codex model variants, and human model variants. Human model variant 1 is based on ResNet50 and human model variant 2 is based on SENet50. Codex model variants consists of multiple fully connected layers written automatically given the human model variants. Finally, we ensemble all four model variations, for our best results.",
        "width": "80%"
    },
    "7": {
        "tex": `\begin{table}[b!]
\small
\centering
\begin{tabular}{|l|c|c|} 
\hline
\textbf{Split} & \textbf{\# single unique faces} & \textbf{\# of families}\\
\hline
Training & $21,920$ & $571$\\

Validation & $5,045$ & $192$\\

Test & $5,226$ & $190$\\
\hline
Total & $32,191$ & $953$\\
\hline
\end{tabular}
\end{table}`,
        "caption": "Dataset splits: Number of unique faces and number of families used for training, validation, and testing.",
        "width": "80%"
    },
};

export default tables;