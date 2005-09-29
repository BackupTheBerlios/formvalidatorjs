<html>
  <head>
    <script type="text/javascript" src="lib/JSAN.js"></script>
  </head>
  <body>
    <pre id="test"><script>

        var jsan = new JSAN('lib', '../lib');
        jsan.use('Test.More');

        plan({ test: 8 });

        jsan.use('Data.FormValidator');
        isnt( Data.FormValidator, undefined, 'Data.FormValidator variable defined' );

        is( typeof(Data.FormValidator.check), 'function', 'Data.FormValidator.check is a function' );
        is( typeof(Data.FormValidator.check_and_report), 'function', 'Data.FormValidator.check_and_report is a function' );
        var dfv = new Data.FormValidator();
        is( typeof(dfv), 'object', 'new Data.FormValidator return object' );
        is( typeof(dfv.check), 'function', 'dfv.check is a function' );
        is( typeof(dfv.validate), 'function', 'dfv.validate is a function' );
        is( typeof(dfv.load_profiles), 'function', 'dfv.load_profiles is a function' );

        // TODO: results tests

        is( typeof(Data.FormValidator.Results), 'function', 'Data.FormValidator.Results is a function' );
    </script></pre>
  </body>
</html>
