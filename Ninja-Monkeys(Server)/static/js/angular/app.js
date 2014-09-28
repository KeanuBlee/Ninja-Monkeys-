(function(){
    var app = angular.module('myModule', []);

    app.controller("LanguageController", function(){
        this.modes = options;
        this.currentOption = this.modes[0].modename;
        this.setOption = function(val){
          console.log(this.modes[val].modename);
            changeMode(this.modes[val].modename);
            this.currentOption = this.modes[val].modename;
        };
    });

    var options = [
        {   modename: 'apl',
            name: 'APL'
        },
        {   modename: 'asterisk',
            name: 'Asterisk'
        },
        {   modename: 'clike',
            name: 'Clike'
        },
        {   modename: 'clojure',
            name: 'Clojure'
        },
        {   modename: 'cobol',
            name: 'COBOL'
        },
        {   modename: 'coffeescript',
            name: 'CoffeeScript'
        },
        {   modename: 'commonlisp',
            name: 'Common LISP'
        },
        {   modename: 'css',
            name: 'CSS'
        },
        {   modename: 'cypher',
            name: 'Cypher'
        },
        {   modename: 'd',
            name: 'D'
        },
        {   modename: 'diff',
            name: 'diff'
        },
        {   modename: 'django',
            name: 'Django'
        },
        {   modename: 'dtd',
            name: 'DTD'
        },
        {   modename: 'dylan',
            name: 'Dylan'
        },
        {   modename: 'ecl',
            name: 'ECL'
        },
        {   modename: 'eiffel',
            name: 'Eiffel'
        },
        {   modename: 'erlang',
            name: 'Erlang'
        },
        {   modename: 'fortran',
            name: 'FORTRAN'
        },
        {   modename: 'gas',
            name: 'Gas'
        },
        {   modename: 'gfm',
            name: 'GFM'
        },
        {   modename: 'gherkin',
            name: 'Gherkin'
        },
        {   modename: 'go',
            name: 'Go'
        },
        {   modename: 'groovy',
            name: 'Groovy'
        },
        {   modename: 'haml',
            name: 'Haml'
        },
        {   modename: 'haskell',
            name: 'Haskell'
        },
        {   modename: 'haxe',
            name: 'Haxe'
        },
        {   modename: 'htmlembedded',
            name: 'HTML - Embedded'
        },
        {   modename: 'htmlmixed',
            name: 'HTML - Mixed'
        },
        {   modename: 'http',
            name: 'HTTP'
        },
        {   modename: 'jade',
            name: 'JADE'
        },
        {   modename: 'javascript',
            name: 'JavaScript'
        },
        {   modename: 'jinja2',
            name: 'Jinja2'
        },
        {   modename: 'julia',
            name: 'Julia'
        },
        {   modename: 'kotlin',
            name: 'Kotlin'
        },
        {   modename: 'livescript',
            name: 'LiveScript'
        },
        {   modename: 'lua',
            name: "Lua"
        },
        {   modename: 'markdown',
            name: 'Markdown'
        },
        {   modename: 'mirc',
            name: 'mIRC'
        },
        {   modename: 'mllike',
            name: 'ML-like'
        },
        {   modename: 'modelica',
            name: 'Modelica'
        },
        {   modename: 'nginx',
            name: 'Nginx'
        },
        {   modename: 'ntriples',
            name: 'NTriples'
        },
        {   modename: 'octave',
            name: 'Octave'
        },
        {   modename: 'pascal',
            name: 'Pascal'
        },
        {   modename: 'pegjs',
            name: 'PEG.js'
        },
        {   modename: 'perl',
            name: 'Perl'
        },
        {   modename: 'php',
            name: 'PHP'
        },
        {   modename: 'pig',
            name: 'Pig'
        },
        {   modename: 'properties',
            name: 'Properties'
        },
        {   modename: 'puppet',
            name: 'Puppet'
        },
        {   modename: 'python',
            name: 'Python'
        },
        {   modename: 'q',
            name: 'Q'
        },
        {   modename: 'r',
            name: 'R'
        },
        {   modename: 'rpm',
            name: 'RPM'
        },
        {   modename: 'rst',
            name: 'reStructuredText'
        },
        {   modename: 'ruby',
            name: 'Ruby'
        },
        {   modename: 'rust',
            name: 'Rust'
        },
        {   modename: 'sass',
            name: 'Sass'
        },
        {   modename: 'scheme',
            name: 'Scheme'
        },
        {   modename: 'shell',
            name: 'Shell'
        },
        {   modename: 'sieve',
            name: 'Sieve'
        },
        {   modename: 'slim',
            name: 'Slim'
        },
        {   modename: 'smalltalk',
            name: 'Smalltalk'
        },
        {   modename: 'smarty',
            name: 'Smarty'
        },
        {   modename: 'smartymixed',
            name: 'Smarty - Mixed'
        },
        {   modename: 'solr',
            name: 'Solr'
        },
        {   modename: 'sparql',
            name: 'SPARQL'
        },
        {   modename: 'sql',
            name: 'SQL'
        },
        {   modename: 'stex',
            name: 'sTeX'
        },
        {   modename: 'tcl',
            name: 'Tcl'
        },
        {   modename: 'toml',
            name: 'toml'
        },
        {   modename: 'turtle',
            name: 'Turle'
        },
        {   modename: 'vb',
            name: 'Visual Basic'
        },
        {   modename: 'vbscript',
            name: 'VBScript'
        },
        {   modename: 'velocity',
            name: 'Velocity'
        },
        {   modename: 'verilog',
            name: 'Verilog'
        },
        {   modename: 'xml',
            name: 'XML'
        },
        {   modename: 'xquery',
            name: 'XQuery'
        },
        {   modename: 'yaml',
            name: 'YAML'
        },
        {   modename: 'z80',
            name: 'Z80'
        }
      ];
}) ();