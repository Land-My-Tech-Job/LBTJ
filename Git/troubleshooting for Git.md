troubleshooting for Git
    committing 
        pwd - this is to make sure you are in the right directory
        ls - list the file directories that are in the current folder (good for letting you know where to cd into)
        git status - show you the status of the tracked repo, tell you what is being tracked and what is ready for commit
        git branch - list all the current local branch of the repository
        git branch -D - force delete a branch (unsaved changes will be discarded)
        git branch nameOfBranch - create a branch named nameOfBranch
        git checkout -b nameOfBranch - create AND switch to nameOfBranch
        git checkout nameOfBranch - switches to nameOfBranch

        if brought to text editor (aka vi, when amending a commit OR having issues on commit message) perform the following action
            press the <esc> key (you will know if it doesn't say insert at the bottom left)
            type ":q" to quit ":q!" to force quit ":wq" to save and quit

        git pull vs fetch - pull takes all the remote changes and fetch pull changes but doesn't apply them immmediately

    
    switch to the harrison branch
    type git pull to get the changes that I pushed

function 