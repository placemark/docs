---
Name: Forms
Collection ID: 61672c73ba256802311968e5
Item ID: 61847dec75e32f77cd09c0f8
Created On: Fri Nov 05 2021 00:42:20 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Nov 05 2021 00:42:20 GMT+0000 (Coordinated Universal Time)
Published On: Fri Nov 05 2021 00:42:27 GMT+0000 (Coordinated Universal Time)
Category: guides
Summary: How forms simplify the way you can edit map data in Placemark.

---

Placemark supports a nearly-unlimited range of data types for properties. You can name properties anything you want, and store any type that can be encoded as JSON - text, numbers, objects, arrays, boolean values.

But in some cases, you want to easily input a predictable set of properties with a form. For that, Placemark has: forms. You can create a form by clicking the gear icon next to the properties editor.

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61847d10a915ba1617de5ef5_CleanShot%202021-11-04%20at%2020.38.07%402x.png)

Click this icon to access the form editor.

Then you can create a form, and after saving the form, alongside **Raw**, you have "Form" option, which contains the simplified fields.

![](https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61847d615da256ed894d0a42_CleanShot%202021-11-04%20at%2020.39.23%402x.png)

The created form

Forms have to interact with pre-existing data, because you can create and modify then at any time. Here's ho they do that:

* Creating and editing a form doesn't change your data. Your data doesn't lose or gain properties when you change the inputs in a form.
* When you edit data through the form, those properties are edited, but other properties are left alone. For example, in the form above, 'notes' and 'type' will be edited, but if this data already has a property 'kind', it will stay the same.
* If the form field and the existing data are not compatible - for example, if the property contains an object but the form edits text, the form will appear empty at first, and saving the form will set the property to that new text value.
