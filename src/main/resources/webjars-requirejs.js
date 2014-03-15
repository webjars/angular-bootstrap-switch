requirejs.config({
    paths: { "angular-bootstrap-switch": webjars.path("angular-bootstrap-switch", "angular-bootstrap-switch") },
    shim: { "angular-bootstrap-switch": [ "angular", "bootstrap-switch" ] }
});
