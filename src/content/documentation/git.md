---
layout: ../../layouts/MarkdownContainer.astro
title: Git
description: Git is a distributed version control system. It's used for tracking changes in source code during software development, enabling multiple developers to work on the same project simultaneously without overwriting each other's work.
imageUrl: "/images/test.jpg"
date: "Sep 7, 2023"
datetime: "2023-09-07"
category: Documentation
disable: false
---

### Setup and Config

- Initialize a new Git repository

```
git init
```

- Set author name for all repositories

```
git config --global user.name "[name]"
```

- Set author email for all repositories

```
git config --global user.email "[email address]"
```

### Staging and Committing

- Add all new and changed files to the staging area

```
git add .
```

- Add a particular file or directory to the staging area

```
git add [file or dir name]
```

- Commit changes

```
git commit -m "[commit message]"
```

### Branching and Merging

- List all local branches

```
git branch
```

- List all local and remote branches

```
git branch -a
```

- Create a new branch

```
git branch [branch name]
```

- Switch to a branch

```
git checkout [branch name]
```

### Working with Remotes

- Push changes to remote repository

```
git push -u origin [branch name]
```

- Update local repository to the newest commit

```
git pull
```

- Clone a remote repository into a new directory Inspection and Comparison

```
git clone [url]
```

- Check status of your files and the staging area

```
git status
```

- Show all commits in the current branch's history

```
git log
```

### Undoing Changes

- Discard all history and changes back to the specified commit

```
git reset --hard [commit]
```
