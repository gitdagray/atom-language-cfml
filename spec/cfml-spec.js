describe('cfml grammar', function() {
    var grammar;

    beforeEach(function() {
        waitsForPromise(function() {
            return atom.packages.activatePackage('language-cfml');
        });

        runs(function() {
            grammar = atom.grammars.grammarForScopeName('source.cfml');
        })
    });

    it('parses the grammar', function() {
        expect(grammar).toBeTruthy();
        expect(grammar.scopeName).toBe('source.cfml');
    });

    describe('cfcomponent', function() {
        it('tokenizes correctly', function() {
            var tokens = grammar.tokenizeLines(['<cfcomponent name="Test Component">','</cfcomponent>'].join('\n'));

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cfcomponent', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'entity.name.tag.cfcomponent.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'name', scopes: [
              'source.cfml',
              'meta.tag.cfcomponent.cfml',
              'meta.attribute-with-value.name.cfml',
              'entity.other.attribute-name.name.cfml'
            ]});
            expect(tokens[0][4]).toEqual({ value: '=', scopes: [
              'source.cfml',
              'meta.tag.cfcomponent.cfml',
              'meta.attribute-with-value.name.cfml',
              'punctuation.separator.key-value.cfml'
            ]});
            expect(tokens[0][5]).toEqual({ value: '"', scopes: [
              'source.cfml',
              'meta.tag.cfcomponent.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml',
              'punctuation.definition.string.begin.cfml'
            ]});
            expect(tokens[0][6]).toEqual({ value: 'Test Component', scopes: [
              'source.cfml',
              'meta.tag.cfcomponent.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml'
            ]});
            expect(tokens[0][7]).toEqual({ value: '"', scopes: [
              'source.cfml',
              'meta.tag.cfcomponent.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml',
              'punctuation.definition.string.end.cfml'
            ]});
            expect(tokens[0][8]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[1][0]).toEqual({ value: '</', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[1][1]).toEqual({ value: 'cfcomponent', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'entity.name.tag.cfcomponent.cfml'] });
            expect(tokens[1][2]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cfcomponent.cfml', 'punctuation.definition.tag.end.cfml'] });

        });
    });

    describe('cfproperty', function() {
        it('tokenizes correctly', function() {
            var tokens = grammar.tokenizeLines('<cfproperty name="name" default="John Doe" />');

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cfproperty', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'entity.name.tag.cfproperty.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'name', scopes: [
              'source.cfml',
              'meta.tag.cfproperty.cfml',
              'meta.attribute-with-value.name.cfml',
              'entity.other.attribute-name.name.cfml'
            ]});
            expect(tokens[0][4]).toEqual({ value: '=', scopes: [
              'source.cfml',
              'meta.tag.cfproperty.cfml',
              'meta.attribute-with-value.name.cfml',
              'punctuation.separator.key-value.cfml'
            ]});
            expect(tokens[0][5]).toEqual({ value: '"', scopes: [
              'source.cfml',
              'meta.tag.cfproperty.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml',
              'punctuation.definition.string.begin.cfml'
             ]});
            expect(tokens[0][6]).toEqual({ value: 'name', scopes: [
              'source.cfml',
              'meta.tag.cfproperty.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml'
            ]});
            expect(tokens[0][7]).toEqual({ value: '"', scopes: [
              'source.cfml',
              'meta.tag.cfproperty.cfml',
              'meta.attribute-with-value.name.cfml',
              'string.quoted.double.cfml',
              'punctuation.definition.string.end.cfml'
            ]});
            expect(tokens[0][8]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][9]).toEqual({ value: 'default', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'entity.other.attribute-name.default.cfml'] });
            expect(tokens[0][10]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][11]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][12]).toEqual({ value: 'John Doe', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[0][13]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][14]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][15]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'punctuation.definition.tag.end.cfml'] });

        });
    });

    describe('cffunction', function() {
        it('tokenizes simple cffunctions correctly', function() {
            var tokens = grammar.tokenizeLines([
                '<cffunction access="public" returntype="string" name="init">',
                '    <cfreturn "value" />',
                '</cffunction>'
            ].join('\n'));

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'access', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'entity.other.attribute-name.access.cfml'] });
            expect(tokens[0][4]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][5]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][6]).toEqual({ value: 'public', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[0][7]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][8]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][9]).toEqual({ value: 'returntype', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'entity.other.attribute-name.returntype.cfml'] });
            expect(tokens[0][10]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][11]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][12]).toEqual({ value: 'string', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[0][13]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][14]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][15]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'entity.other.attribute-name.name.cfml'] });
            expect(tokens[0][16]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][17]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][18]).toEqual({ value: 'init', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[0][19]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][20]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[1][0]).toEqual({ value: '    ', scopes: ['source.cfml'] });
            expect(tokens[1][1]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[1][2]).toEqual({ value: 'cfreturn', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'entity.name.tag.cfreturn.cfml'] });
            expect(tokens[1][3]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript'] });
            expect(tokens[1][4]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript', 'string.quoted.double.cfml','punctuation.definition.string.begin.cfml'] });
            expect(tokens[1][5]).toEqual({ value: 'value', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript', 'string.quoted.double.cfml'] });
            expect(tokens[1][6]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript', 'string.quoted.double.cfml','punctuation.definition.string.end.cfml'] });

            expect(tokens[2][0]).toEqual({ value: '</', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[2][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[2][2]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });
        });

        it('tokenizes simple cffunctions with single quotes correctly', function() {
            var tokens = grammar.tokenizeLines([
                '<cffunction access=\'public\' returntype=\'void\' name=\'init\'>',
                '    <cfreturn />',
                '</cffunction>'
            ].join('\n'));

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'access', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'entity.other.attribute-name.access.cfml'] });
            expect(tokens[0][4]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][5]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][6]).toEqual({ value: 'public', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][7]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][8]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][9]).toEqual({ value: 'returntype', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'entity.other.attribute-name.returntype.cfml'] });
            expect(tokens[0][10]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][11]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][12]).toEqual({ value: 'void', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][13]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][14]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][15]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'entity.other.attribute-name.name.cfml'] });
            expect(tokens[0][16]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][17]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][18]).toEqual({ value: 'init', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][19]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][20]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[1][0]).toEqual({ value: '    ', scopes: ['source.cfml'] });
            expect(tokens[1][1]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[1][2]).toEqual({ value: 'cfreturn', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'entity.name.tag.cfreturn.cfml'] });
            expect(tokens[1][3]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript'] });
            expect(tokens[1][4]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[2][0]).toEqual({ value: '</', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[2][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[2][2]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });
        });

        it('tokenizes a complex cffunction block correctly', function() {
            var tokens = grammar.tokenizeLines([
                '<cffunction access=\'public\' returntype=\'void\' name=\'init\'>',
                '    <cfargument required="false" type="string" name="name" default="John Doe" />',
                '',
                '    <cfset variables.url = arguments.url />',
                '    <cfreturn />',
                '</cffunction>'
            ].join('\n'));

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'access', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'entity.other.attribute-name.access.cfml'] });
            expect(tokens[0][4]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][5]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][6]).toEqual({ value: 'public', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][7]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.access.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][8]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][9]).toEqual({ value: 'returntype', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'entity.other.attribute-name.returntype.cfml'] });
            expect(tokens[0][10]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][11]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][12]).toEqual({ value: 'void', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][13]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.returntype.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][14]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cffunction.cfml'] });
            expect(tokens[0][15]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'entity.other.attribute-name.name.cfml'] });
            expect(tokens[0][16]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][17]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][18]).toEqual({ value: 'init', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml'] });
            expect(tokens[0][19]).toEqual({ value: '\'', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.single.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][20]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[1][0]).toEqual({ value: '    ', scopes: ['source.cfml'] });
            expect(tokens[1][1]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[1][2]).toEqual({ value: 'cfargument', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'entity.name.tag.cfargument.cfml'] });
            expect(tokens[1][3]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfargument.cfml'] });
            expect(tokens[1][4]).toEqual({ value: 'required', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.required.cfml', 'entity.other.attribute-name.required.cfml'] });
            expect(tokens[1][5]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.required.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[1][6]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.required.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[1][7]).toEqual({ value: 'false', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.required.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[1][8]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.required.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[1][9]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfargument.cfml'] });
            expect(tokens[1][10]).toEqual({ value: 'type', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.type.cfml', 'entity.other.attribute-name.type.cfml'] });
            expect(tokens[1][11]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.type.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[1][12]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.type.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[1][13]).toEqual({ value: 'string', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.type.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[1][14]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.type.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[1][15]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfargument.cfml'] });
            expect(tokens[1][16]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.name.cfml', 'entity.other.attribute-name.name.cfml'] });
            expect(tokens[1][17]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.name.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[1][18]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[1][19]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[1][20]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[1][21]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfargument.cfml'] });
            expect(tokens[1][22]).toEqual({ value: 'default', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.default.cfml', 'entity.other.attribute-name.default.cfml'] });
            expect(tokens[1][23]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.default.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[1][24]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[1][25]).toEqual({ value: 'John Doe', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[1][26]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[1][27]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfargument.cfml'] });
            expect(tokens[1][28]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfargument.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[2][0]).toEqual({ value: '', scopes: ['source.cfml'] });

            expect(tokens[3][0]).toEqual({ value: '    ', scopes: ['source.cfml'] });
            expect(tokens[3][1]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[3][2]).toEqual({ value: 'cfset', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'entity.name.tag.cfset.cfml'] });
            expect(tokens[3][3]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript'] });
            expect(tokens[3][4]).toEqual({ value: 'variables', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'variable.language.scope.cfml'] });
            expect(tokens[3][5]).toEqual({ value: '.', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'keyword.operator.accessor.cfml'] });
            expect(tokens[3][6]).toEqual({ value: 'url', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'variable.other.cfml'] });
            expect(tokens[3][7]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript'] });
            expect(tokens[3][8]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'keyword.operator.assignment.cfml'] });
            expect(tokens[3][9]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript'] });
            expect(tokens[3][10]).toEqual({ value: 'arguments', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'variable.language.scope.cfml'] });
            expect(tokens[3][11]).toEqual({ value: '.', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'keyword.operator.accessor.cfml'] });
            expect(tokens[3][12]).toEqual({ value: 'url', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript', 'variable.other.cfml'] });
            expect(tokens[3][13]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'source.cfscript'] });
            expect(tokens[3][14]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfset.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[4][1]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[4][2]).toEqual({ value: 'cfreturn', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'entity.name.tag.cfreturn.cfml'] });
            expect(tokens[4][3]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'source.cfscript'] });
            expect(tokens[4][4]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfreturn.cfml', 'punctuation.definition.tag.end.cfml'] });

            expect(tokens[5][0]).toEqual({ value: '</', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[5][1]).toEqual({ value: 'cffunction', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'entity.name.tag.cffunction.cfml'] });
            expect(tokens[5][2]).toEqual({ value: '>', scopes: ['source.cfml', 'meta.tag.cffunction.cfml', 'punctuation.definition.tag.end.cfml'] });
        });
    });

    describe('cfoutput', function(){
      it('tokenizes output block and injects hash delimited expressions', function() {
          var tokens = grammar.tokenizeLines([
              '<cfoutput query="#test#">',
              '    <cfset expression = 4 />',
              '    test #expression#',
              '</cfoutput>'
          ].join('\n'));
          // Line 1:
          expect(tokens[0][0]).toEqual({"value":"<", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "punctuation.definition.tag.begin.cfml"
            ]
          });
          expect(tokens[0][1]).toEqual({"value":"cfoutput", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "entity.name.tag.cfoutput.cfml"
            ]
          });
          expect(tokens[0][2]).toEqual({"value":" ", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml"
            ]
          });
          expect(tokens[0][3]).toEqual({"value":"query", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "entity.other.attribute-name.query.cfml"
            ]
          });
          expect(tokens[0][4]).toEqual({"value":"=", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "punctuation.separator.key-value.cfml"
            ]
          });
          expect(tokens[0][5]).toEqual({"value":"\"", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "string.quoted.double.cfml",
              "punctuation.definition.string.begin.cfml"
            ]
          });
          expect(tokens[0][6]).toEqual({"value":"#", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "string.quoted.double.cfml",
              "constant.character.hash.cfml"
            ]
          });
          expect(tokens[0][7]).toEqual({"value":"test", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "string.quoted.double.cfml",
              "variable.other.cfml"
            ]
          });
          expect(tokens[0][8]).toEqual({"value":"#", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "string.quoted.double.cfml",
              "constant.character.hash.cfml"
            ]
          });
          expect(tokens[0][9]).toEqual({"value":"\"", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "meta.attribute-with-value.query.cfml",
              "string.quoted.double.cfml",
              "punctuation.definition.string.end.cfml"
            ]
          });
          expect(tokens[0][10]).toEqual({"value":">", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "punctuation.definition.tag.end.cfml"
            ]
          });

          expect(tokens[1][0]).toEqual({"value":"    ", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml"
            ]
          });
          expect(tokens[1][1]).toEqual({"value":"<", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "punctuation.definition.tag.begin.cfml"
            ]
          });
          expect(tokens[1][2]).toEqual({"value":"cfset", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "entity.name.tag.cfset.cfml"
            ]
          });
          expect(tokens[1][3]).toEqual({"value":" ", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript"
            ]
          });
          expect(tokens[1][4]).toEqual({"value":"expression", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript",
              "variable.other.cfml"
            ]
          });
          expect(tokens[1][5]).toEqual({"value":" ", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript"
            ]
          });
          expect(tokens[1][6]).toEqual({"value":"=", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript",
              "keyword.operator.assignment.cfml"
            ]
          });
          expect(tokens[1][7]).toEqual({"value":" ", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript"
            ]
          });
          expect(tokens[1][8]).toEqual({"value":"4", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript",
              "constant.numeric.cfml"
            ]
          });
          expect(tokens[1][9]).toEqual({"value":" ", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "source.cfscript"
            ]
          });
          expect(tokens[1][10]).toEqual({"value":"/>", "scopes":
            [
              "source.cfml",
              "meta.scope.cfoutput.cfml",
              "meta.tag.cfset.cfml",
              "punctuation.definition.tag.end.cfml"
            ]
          });

          expect(tokens[2][0]).toEqual({"value":"    test ","scopes": ["source.cfml","meta.scope.cfoutput.cfml"]});
          expect(tokens[2][1]).toEqual({"value":"#","scopes":["source.cfml","meta.scope.cfoutput.cfml","constant.character.hash.cfml"]});
          expect(tokens[2][2]).toEqual({"value":"expression","scopes":["source.cfml","meta.scope.cfoutput.cfml","variable.other.cfml"]});
          expect(tokens[2][3]).toEqual({"value":"#","scopes":["source.cfml","meta.scope.cfoutput.cfml","constant.character.hash.cfml"]});

          expect(tokens[3][0]).toEqual({"value":"</", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "punctuation.definition.tag.begin.cfml"
            ]
          });
          expect(tokens[3][1]).toEqual({"value":"cfoutput", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "entity.name.tag.cfoutput.cfml"
            ]
          });
          expect(tokens[3][2]).toEqual({"value":">", "scopes":
            [
              "source.cfml",
              //"meta.scope.cfoutput.cfml",
              "meta.tag.cfoutput.cfml",
              "punctuation.definition.tag.end.cfml"
            ]
          });

      });
    });

    describe('URLs in strings', function() {
        beforeEach(function() {
            waitsForPromise(function() {
                // Include this package here since it is on by default in Atom and can change the behavior of the grammar
                return atom.packages.activatePackage('language-hyperlink');
            });
        });

        it('should tokenize cfml in urls correctly', function() {
            var tokens = grammar.tokenizeLines('<cfproperty name="url" default="https://github.com/#username#" />');

            expect(tokens[0][0]).toEqual({ value: '<', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'punctuation.definition.tag.begin.cfml'] });
            expect(tokens[0][1]).toEqual({ value: 'cfproperty', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'entity.name.tag.cfproperty.cfml'] });
            expect(tokens[0][2]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][3]).toEqual({ value: 'name', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.name.cfml', 'entity.other.attribute-name.name.cfml'] });
            expect(tokens[0][4]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.name.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][5]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][6]).toEqual({ value: 'url', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml'] });
            expect(tokens[0][7]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.name.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][8]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][9]).toEqual({ value: 'default', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'entity.other.attribute-name.default.cfml'] });
            expect(tokens[0][10]).toEqual({ value: '=', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'punctuation.separator.key-value.cfml'] });
            expect(tokens[0][11]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.begin.cfml'] });
            expect(tokens[0][12]).toEqual({ value: 'https://github.com/', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'markup.underline.link.https.hyperlink'] });
            expect(tokens[0][13]).toEqual({ value: '#', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'constant.character.hash.cfml'] });
            expect(tokens[0][14]).toEqual({ value: 'username', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml','variable.other.cfml'] });
            expect(tokens[0][15]).toEqual({ value: '#', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'constant.character.hash.cfml'] });
            expect(tokens[0][16]).toEqual({ value: '"', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'meta.attribute-with-value.default.cfml', 'string.quoted.double.cfml', 'punctuation.definition.string.end.cfml'] });
            expect(tokens[0][17]).toEqual({ value: ' ', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml'] });
            expect(tokens[0][18]).toEqual({ value: '/>', scopes: ['source.cfml', 'meta.tag.cfproperty.cfml', 'punctuation.definition.tag.end.cfml'] });
        });
    });

});
