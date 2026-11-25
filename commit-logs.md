With this current project, I had utilized my home computer and another copy of VSCode with everything installed on it. During the duration of this project none of my commits were actually being shown in my github repo except the first and last commits. I think the issue spans from not checking which Github acccount was authentificated in VSCode at the time of my pushes to GitHub. I have found the records of all the commits made by utilizing the Timeline feature and getting it from the Git Terminal inside VSCode. I wanted to provide the commit messages that were missing from the project below. Over the break I will work on this issue and make sure everything is synced properly moving foward. Thank you for you patience. -Terrell


THESE ARE ALL THE COMMIT LOGS MADE MONDAY, NOVEMBER 23, 2026


301bb36 (HEAD -> master) index.html: Added the Display Table for tasks w/ Bootstrap styling | style.css: Added styling for card 3 which includes placeholders for the Dynamic States that will be found in the script.js file. | Will begin
301bb36 (HEAD -> master) index.html: Added the Display Table for tasks w/ Bootstrap styling | style.css: Added styling for card 3 which includes placeholders for the Dynamic States that will be found in the script.js file. | Will begin on adding functionality via the script.js file |
301bb36 (HEAD -> master) index.html: Added the Display Table for tasks w/ Bootstrap styling | style.css: Added styling for card 3 wh
301bb36 (HEAD -> master) index.html: Added the Display Table for tasks w/ Bootstrap styling | style.css: Added styling for c
301bb36 (HEAD -> master) index.html: Added the Display Table for tasks w/ Bootstrap styling | style.css: Added styling for card 3 which includes placeholders for the Dynamic States that will be found in the script.js file. | Will begin on adding functionality via the script.js file |
f383588 style.css: Went back to style the header for Add Task Card | CSSand Bootstrap for header, body, card 1 and card 2 have been completed. Will move on to the final card for the HTML with styling from Bootstrap and CSS.|
6b77e5f style.css: I realized that I didn't save the .css file | Please see prior commit for details concerning style.css |
6baeb66 Added index.html, style.css and script.js | index.html: Started Add new task portion of task management project. Decided to use nested option tags in a select tag so I can utilize the drop-down feature. |
9e08d94 Initial commit for the SBA
~

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git add .

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git commit -m "script.js: Begin working on the javascript file | created the DOM references(variables) |"
[master 6216bd5] script.js: Begin working on the javascript file | created the DOM references(variables) |
 2 files changed, 18 insertions(+), 2 deletions(-)

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git add .

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git commit -m "script.js: Added function to save tasks to local storage | Added function to check for overdue tasks |"
[master d82c5ea] script.js: Added function to save tasks to local storage | Added function to check for overdue tasks |
 1 file changed, 1 insertion(+), 1 deletion(-)

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git add .

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git commit -m "(previous commit: Did not save those two functions in prior commit | Please see prior commit for details |"
[master ab3d464] (previous commit: Did not save those two functions in prior commit | Please see prior commit for details |
 1 file changed, 28 insertions(+)

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git add .

AzureAD+IC327FishtownPA@DESKTOP-0LBI25I UCRT64 /e/4-SBA-TaskMgmtApp (master)
$ git commit -m "script.js: Completed add tasks function | completed update task function |"
[master 8b21a7d] script.js: Completed add tasks function | completed update task function |
 1 file changed, 42 insertions(+)


 COMMIT LOGS FOR TODAT TUESDAY, NOVEMBER 24, 2026


  git reflog --all --oneline
ed698a3 (HEAD -> main, origin/main, origin/HEAD) refs/remotes/origin/main@{0}: update by push
ed698a3 (HEAD -> main, origin/main, origin/HEAD) refs/heads/main@{0}: pull --rebase origin main (finish): refs/heads/main onto ec9e2530b6c46b117f20c3ffdf9064e547922c7a
ed698a3 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: pull --rebase origin main (finish): returning to refs/heads/main
ed698a3 (HEAD -> main, origin/main, origin/HEAD) HEAD@{1}: pull --rebase origin main (pick): script.js: Completed Filter and Display Tasks | Completed Event Listeners | Completed Startup Execution function for project | Verified File/Folder setup | Checked Browser console for errors | 2 Errors were shown and resolved | Ran tests for the following: Add tasks, Input validation, update status of tasks, automatic overdue detection, checked status and category filters and the local storage save when page is refreshed | removed unnecessary console logs | **May update CSS if I have enough time |
ec9e253 HEAD@{2}: pull --rebase origin main (start): checkout ec9e2530b6c46b117f20c3ffdf9064e547922c7a
49df215 refs/heads/main@{1}: commit: script.js: Completed Filter and Display Tasks | Completed Event Listeners | Completed Startup Execution function for project | Verified File/Folder setup | Checked Browser console for errors | 2 Errors were shown and resolved | Ran tests for the following: Add tasks, Input validation, update status of tasks, automatic overdue detection, checked : git reflog --all --oneline
ed698a3 (HEAD -> main, origin/main, origin/HEAD) refs/remotes/origin/main@{0}: update by push
ed698a3 (HEAD -> main, origin/main, origin/HEAD) refs/heads/main@{0}: pull --rebase origin main (finish): refs/heads/main onto ec9e2530b6c46b117f20c3ffdf9064e547922c7a
ed698a3 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: pull --rebase origin main (finish): returning to refs/heads/main
ed698a3 (HEAD -> main, origin/main, origin/HEAD) HEAD@{1}: pull --rebase origin main (pick): script.js: Completed Filter and Display Tasks | Completed Event Listeners | Completed Startup Execution function for project | Verified File/Folder setup | Checked Browser console for errors | 2 Errors were shown and resolved | Ran tests for the following: Add tasks, Input validation, update status of tasks, automatic overdue detection, checked status and category filters and the local storage save when page is refreshed | removed unnecessary console logs | **May update CSS if I have enough time |
ec9e253 HEAD@{2}: pull --rebase origin main (start): checkout ec9e2530b6c46b117f20c3ffdf9064e547922c7a
49df215 refs/heads/main@{1}: commit: script.js: Completed Filter and Display Tasks | Completed Event Listeners | Completed Startup Execution function for project | Verified File/Folder setup | Checked Browser console for errors | 2 Errors were shown and resolved | Ran tests for the following: Add tasks, Input validation, update status of tasks, automatic overdue detection, checked :