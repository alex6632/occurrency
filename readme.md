Occurrency
===================

Purpose
------------
"Occurrency" count the occurrence number of each words in a text.

Init
-------
1. Include the Occurrency script at the bottom of your HTML file.
2. Put this code after :
```
<script>
    Occurrency({
        text: "text",
        result: "result"
    });
</script>
````

3. Add more parameters if you want.

Parameters
---------

Name | Required | Type | Default | Purpose
:- |:-: | :-: | :-: | -:
`text` | true | string | / | Text `id` used for count occurences.
`result` | true | string | / | Tag `id`used for render result
`customAppend` | false | boolean | false | Set `true` if you want append result in a custom HTML tag
`limit` | false | int | 2 | By default, words less or equal than `two` letters will be ignored