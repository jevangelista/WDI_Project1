Great job! Check comments in each of your files for more detailed feedback. My initials `it:` mark my comments.

##Creativity

* Nice job coming up with an idea and designing a fun application around it.
* Loving the drink illustrations!

##Planning

* Nice job getting your idea on paper using user stories and some great illustrations. More consideration for data structure and models could help for next time around!

##Execution

* Don't hard code user data in your seed file to such a degree, there may be strange side-effects. Avoid setting an `_id` and `passwordDigest`, those will be automatically generated when the user is saved.


##Next Steps

* Consider fleshing out your user stories, those are all epic stories!
* Add a link in the readme to your deployed application
* Consider creating an `Ingredient` model which would help save memory for drinks that use the same ingredient, such as `Lemon Juice`.
* Consider refactoring the views with EJS partials. The `<head>` tag being the same in each view is redundant.