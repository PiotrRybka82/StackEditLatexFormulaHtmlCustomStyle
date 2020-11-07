# StackEdit custom style enabling proper rendering of Latex formulas in GitHub

A custom style for publishing StackEdit notes on GitHub as markdown files with LaTeX formulas rendered automatically as graphics.

LaTeX formulas should be written as usual, i.e. between dollar signs. All characters between dollar signs will be automatically replaced by the following HTML element:

``
<img src="https://render.githubusercontent.com/render/math?math=YOUR FORMULA GOES HERE">
``

Example:

Markdown note in StackEdit: 

``
$x_1 + 2 + \frac{1}{2}$
``

Raw markdown file on GitHub: 

``
<img src="https://render.githubusercontent.com/render/math?math=e^{i \pi} = -1">
``

Rendering result: 

<img src="https://render.githubusercontent.com/render/math?math=e^{i \pi} = -1">

# How to use it

1. Create new template in StackEdit Publish to GitHub window, e.g. 

2. Paste the content of Value.js into Value windows.

3. Paste the content of Helpers.js into Helpers window. 

4. Click OK.

