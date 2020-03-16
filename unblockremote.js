var body = $response.body;
body = '\/*\n@supported ED33AF37DF8F\n*\/\n' + body;

$done(body);
