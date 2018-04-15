Occurrency
===================

Purpose
------------
"Occurrency" count the occurrences of each word in a text.

Init
-------
1. Include the Occurrency script at the bottom of your HTML file.
2. Copy and paste the code below :
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
`text` | true | string | / | Text `id` used for counting occurrences.
`result` | true | string | / | Tag `id` used for rendering result
`customAppend` | false | boolean | false | Set `true` if you want to append result in a custom HTML tag
`limit` | false | int | 2 | By default, words less or equal than `two` letters will be ignored