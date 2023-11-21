---
Name: Forms
Collection ID: 61672c73ba256802311968e5
Item ID: 61847dec75e32f77cd09c0f8
Created On: Fri Nov 05 2021 00:42:20 GMT+0000 (Coordinated Universal Time)
Updated On: Fri Nov 05 2021 00:42:20 GMT+0000 (Coordinated Universal Time)
Published On: Fri Nov 05 2021 00:42:27 GMT+0000 (Coordinated Universal Time)
Body: <p>Placemark supports a nearly-unlimited range of data types for
  properties. You can name properties anything you want, and store any type that
  can be encoded as JSON - text, numbers, objects, arrays, boolean
  values.</p><p>But in some cases, you want to easily input a predictable set of
  properties with a form. For that, Placemark has:&nbsp;forms. You can create a
  form by clicking the gear icon next to the properties editor.</p><figure
  class="w-richtext-figure-type-image w-richtext-align-center"
  data-rt-type="image" data-rt-align="center"><div><img
  src="https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61847d10a915ba1617de5ef5_CleanShot%202021-11-04%20at%2020.38.07%402x.png"
  loading="lazy"></div><figcaption>Click this icon to access the form
  editor.</figcaption></figure><p>Then you can create a form, and after saving
  the form, alongside <strong>Raw</strong>, you have&nbsp;"Form"&nbsp;option,
  which contains the simplified fields.</p><figure
  class="w-richtext-figure-type-image w-richtext-align-center"
  data-rt-type="image" data-rt-align="center"><div><img
  src="https://uploads-ssl.webflow.com/61672c738436bb6bb116c6f2/61847d615da256ed894d0a42_CleanShot%202021-11-04%20at%2020.39.23%402x.png"
  loading="lazy"></div><figcaption>The created
  form</figcaption></figure><p>Forms have to interact with pre-existing data,
  because you can create and modify then at any time. Here's ho they do
  that:</p><ul><li>Creating and editing a form doesn't change your data. Your
  data doesn't lose or gain properties when you change the inputs in a
  form.</li><li>When you edit data through the form, those properties are
  edited, but other properties are left alone. For example, in the form above,
  'notes' and 'type' will be edited, but if this data already has a property
  'kind', it will stay the same.</li><li>If the form field and the existing data
  are not compatible - for example, if the property contains an object but the
  form edits text, the form will appear empty at first, and saving the form will
  set the property to that new text value.</li></ul>
Category: guides
Summary: How forms simplify the way you can edit map data in Placemark.

---
