const writeHTML = manager => {

return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
</head>
<body>
    <div class="content">
        <ul class="manager" id="manager">
            <li>Name: ${manager.getName()}</li>
        </ul>
    </div>
</body>
</html>`
}

module.exports = writeHTML;