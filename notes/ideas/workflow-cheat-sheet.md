# Workflow example with feature/task branches

*Main remote branch is set up*

## Locally

1. Do __git clone__ or __git pull__ on the main branch to be up to date with the actual version of the main branch

2. ``` git checkout -b <branchname> ```
- Name your branch after the *task/feature* you want to make e.g.
  - ``` git checkout -b createNavbarComponent ```

3. Set your new branch as branch to push:
 ``` git push origin -u <branchname> ```


4. Now work on your task within your new branch
   - stay on your task and work on just one or two files simultaneously
   - if you have to test things that include other files, then test it and discard these changes in the end (you can check your changes on the source control)

5. After you finished your task:
   - check your changes and discard test changes
   - do: ``` git add . && git commit -m "comment for that task" ```
   - e.g. ``` git add . && git commit -m "Created navbar component" ```

6. Push your code: 
   ``` git push ```

## Remote

1. Do a pull request and choose a reviewer
2. The reviewer will check if the branch is ready to merge:
   -    Yes: The branch will be merged and deleted remotely
   -    No: The reviewer will make some comments what things have to change
        -    Change these things on your local branch and push again

## Locally again
  1. If the merge was successful and there are no changes needed anymore:
   -    switch to the main branch and pull there to have the updated version of the main branch:
  ``` git switch main && git pull```

2. Checkout which branches are on your pc and delete the old ones:
   ``` git branch ```
   ``` git branch -D <branchname> ```
   - e.g. ``` git branch -D createNavbarComponent ```

### Congratulation! You finished a task!
  *Now repeat with a new task* 

#### Hints:
- don`t change anything on the main branch
  - if there is a circle on the main branch, check your changes and discard them on the main branch
- We just work on our local branch with one specific task
- If someone else merged his branch into tha main branch and you are currently working on a task, use: ``` git pull origin main ``` on your branch to be up to date inside your branch with the new changes
- To read more about the feature branch workflow in general: [feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)