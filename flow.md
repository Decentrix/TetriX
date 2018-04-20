# Git workflow
## Initial Setup
0. `git clone https://github.com/Decentrix/TetriX.git`

## Regular Flow
1. Create branch w/ initials for feature 
  - `git checkout -b jw-featureName`
2. Work on branch
3. Pull from origin dev
  - `git pull origin dev`
4. Make sure everything works properly
5. Push to your branch
  - `git push origin jw-featureName`
6. Create pull request
  - What did you add?
  - How does this affect the project?

** To delete old branch**
  - `git branch -d jw-featureName`
