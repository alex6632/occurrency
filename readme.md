Occurrency
===================

Purpose
------------
"Occurrency" count the occurrence number of each words in a text.

Init
-------
1. Include the Occurrency script at the bottom of your HTML file.
2. Put this code after. Add more parameters if you want.
```
<script>
    Occurrency({
        text: "text",
        result: "result"
    });
</script>
```


Parameters
---------
* text -> _required_ -> css id
* result -> _required_ -> css id
* customAppend -> _optionnal_ -> boolean (Default value is false)
* limit -> _optionnal_ -> integer (Default value is 2) -> words less or equal than two letters will be ignored


