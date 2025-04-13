// Generated from src/RustParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustParserListener } from "./RustParserListener.js";
import { RustParserVisitor } from "./RustParserVisitor.js";
import RustParserBase from "./RustParserBase.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustParser extends RustParserBase {
    public static readonly KW_AS = 1;
    public static readonly KW_BREAK = 2;
    public static readonly KW_CONST = 3;
    public static readonly KW_CONTINUE = 4;
    public static readonly KW_CRATE = 5;
    public static readonly KW_ELSE = 6;
    public static readonly KW_ENUM = 7;
    public static readonly KW_EXTERN = 8;
    public static readonly KW_FALSE = 9;
    public static readonly KW_FN = 10;
    public static readonly KW_FOR = 11;
    public static readonly KW_IF = 12;
    public static readonly KW_IMPL = 13;
    public static readonly KW_IN = 14;
    public static readonly KW_LET = 15;
    public static readonly KW_LOOP = 16;
    public static readonly KW_MATCH = 17;
    public static readonly KW_MOD = 18;
    public static readonly KW_MOVE = 19;
    public static readonly KW_MUT = 20;
    public static readonly KW_PUB = 21;
    public static readonly KW_REF = 22;
    public static readonly KW_RETURN = 23;
    public static readonly KW_SELFVALUE = 24;
    public static readonly KW_SELFTYPE = 25;
    public static readonly KW_STATIC = 26;
    public static readonly KW_STRUCT = 27;
    public static readonly KW_SUPER = 28;
    public static readonly KW_TRAIT = 29;
    public static readonly KW_TRUE = 30;
    public static readonly KW_TYPE = 31;
    public static readonly KW_UNSAFE = 32;
    public static readonly KW_USE = 33;
    public static readonly KW_WHERE = 34;
    public static readonly KW_WHILE = 35;
    public static readonly KW_ASYNC = 36;
    public static readonly KW_AWAIT = 37;
    public static readonly KW_DYN = 38;
    public static readonly KW_ABSTRACT = 39;
    public static readonly KW_BECOME = 40;
    public static readonly KW_BOX = 41;
    public static readonly KW_DO = 42;
    public static readonly KW_FINAL = 43;
    public static readonly KW_MACRO = 44;
    public static readonly KW_OVERRIDE = 45;
    public static readonly KW_PRIV = 46;
    public static readonly KW_TYPEOF = 47;
    public static readonly KW_UNSIZED = 48;
    public static readonly KW_VIRTUAL = 49;
    public static readonly KW_YIELD = 50;
    public static readonly KW_TRY = 51;
    public static readonly KW_UNION = 52;
    public static readonly KW_STATICLIFETIME = 53;
    public static readonly KW_MACRORULES = 54;
    public static readonly KW_UNDERLINELIFETIME = 55;
    public static readonly KW_DOLLARCRATE = 56;
    public static readonly NON_KEYWORD_IDENTIFIER = 57;
    public static readonly RAW_IDENTIFIER = 58;
    public static readonly LINE_COMMENT = 59;
    public static readonly BLOCK_COMMENT = 60;
    public static readonly INNER_LINE_DOC = 61;
    public static readonly INNER_BLOCK_DOC = 62;
    public static readonly OUTER_LINE_DOC = 63;
    public static readonly OUTER_BLOCK_DOC = 64;
    public static readonly BLOCK_COMMENT_OR_DOC = 65;
    public static readonly SHEBANG = 66;
    public static readonly WHITESPACE = 67;
    public static readonly NEWLINE = 68;
    public static readonly CHAR_LITERAL = 69;
    public static readonly STRING_LITERAL = 70;
    public static readonly RAW_STRING_LITERAL = 71;
    public static readonly BYTE_LITERAL = 72;
    public static readonly BYTE_STRING_LITERAL = 73;
    public static readonly RAW_BYTE_STRING_LITERAL = 74;
    public static readonly INTEGER_LITERAL = 75;
    public static readonly DEC_LITERAL = 76;
    public static readonly HEX_LITERAL = 77;
    public static readonly OCT_LITERAL = 78;
    public static readonly BIN_LITERAL = 79;
    public static readonly FLOAT_LITERAL = 80;
    public static readonly LIFETIME_OR_LABEL = 81;
    public static readonly PLUS = 82;
    public static readonly MINUS = 83;
    public static readonly STAR = 84;
    public static readonly SLASH = 85;
    public static readonly PERCENT = 86;
    public static readonly CARET = 87;
    public static readonly NOT = 88;
    public static readonly AND = 89;
    public static readonly OR = 90;
    public static readonly OROR = 91;
    public static readonly PLUSEQ = 92;
    public static readonly MINUSEQ = 93;
    public static readonly STAREQ = 94;
    public static readonly SLASHEQ = 95;
    public static readonly PERCENTEQ = 96;
    public static readonly CARETEQ = 97;
    public static readonly ANDEQ = 98;
    public static readonly OREQ = 99;
    public static readonly SHLEQ = 100;
    public static readonly SHREQ = 101;
    public static readonly EQ = 102;
    public static readonly EQEQ = 103;
    public static readonly NE = 104;
    public static readonly GT = 105;
    public static readonly LT = 106;
    public static readonly GE = 107;
    public static readonly LE = 108;
    public static readonly AT = 109;
    public static readonly UNDERSCORE = 110;
    public static readonly DOT = 111;
    public static readonly DOTDOT = 112;
    public static readonly DOTDOTDOT = 113;
    public static readonly DOTDOTEQ = 114;
    public static readonly COMMA = 115;
    public static readonly SEMI = 116;
    public static readonly COLON = 117;
    public static readonly PATHSEP = 118;
    public static readonly RARROW = 119;
    public static readonly FATARROW = 120;
    public static readonly POUND = 121;
    public static readonly DOLLAR = 122;
    public static readonly QUESTION = 123;
    public static readonly LCURLYBRACE = 124;
    public static readonly RCURLYBRACE = 125;
    public static readonly LSQUAREBRACKET = 126;
    public static readonly RSQUAREBRACKET = 127;
    public static readonly LPAREN = 128;
    public static readonly RPAREN = 129;
    public static readonly RULE_crate = 0;
    public static readonly RULE_macroInvocation = 1;
    public static readonly RULE_delimTokenTree = 2;
    public static readonly RULE_tokenTree = 3;
    public static readonly RULE_tokenTreeToken = 4;
    public static readonly RULE_macroInvocationSemi = 5;
    public static readonly RULE_macroRulesDefinition = 6;
    public static readonly RULE_macroRulesDef = 7;
    public static readonly RULE_macroRules = 8;
    public static readonly RULE_macroRule = 9;
    public static readonly RULE_macroMatcher = 10;
    public static readonly RULE_macroMatch = 11;
    public static readonly RULE_macroMatchToken = 12;
    public static readonly RULE_macroFragSpec = 13;
    public static readonly RULE_macroRepSep = 14;
    public static readonly RULE_macroRepOp = 15;
    public static readonly RULE_macroTranscriber = 16;
    public static readonly RULE_item = 17;
    public static readonly RULE_visItem = 18;
    public static readonly RULE_macroItem = 19;
    public static readonly RULE_module = 20;
    public static readonly RULE_externCrate = 21;
    public static readonly RULE_crateRef = 22;
    public static readonly RULE_asClause = 23;
    public static readonly RULE_useDeclaration = 24;
    public static readonly RULE_useTree = 25;
    public static readonly RULE_function_ = 26;
    public static readonly RULE_functionQualifiers = 27;
    public static readonly RULE_abi = 28;
    public static readonly RULE_functionParameters = 29;
    public static readonly RULE_selfParam = 30;
    public static readonly RULE_shorthandSelf = 31;
    public static readonly RULE_typedSelf = 32;
    public static readonly RULE_functionParam = 33;
    public static readonly RULE_functionParamPattern = 34;
    public static readonly RULE_functionReturnType = 35;
    public static readonly RULE_typeAlias = 36;
    public static readonly RULE_struct_ = 37;
    public static readonly RULE_structStruct = 38;
    public static readonly RULE_tupleStruct = 39;
    public static readonly RULE_structFields = 40;
    public static readonly RULE_structField = 41;
    public static readonly RULE_tupleFields = 42;
    public static readonly RULE_tupleField = 43;
    public static readonly RULE_enumeration = 44;
    public static readonly RULE_enumItems = 45;
    public static readonly RULE_enumItem = 46;
    public static readonly RULE_enumItemTuple = 47;
    public static readonly RULE_enumItemStruct = 48;
    public static readonly RULE_enumItemDiscriminant = 49;
    public static readonly RULE_union_ = 50;
    public static readonly RULE_constantItem = 51;
    public static readonly RULE_staticItem = 52;
    public static readonly RULE_trait_ = 53;
    public static readonly RULE_implementation = 54;
    public static readonly RULE_inherentImpl = 55;
    public static readonly RULE_traitImpl = 56;
    public static readonly RULE_externBlock = 57;
    public static readonly RULE_externalItem = 58;
    public static readonly RULE_genericParams = 59;
    public static readonly RULE_genericParam = 60;
    public static readonly RULE_lifetimeParam = 61;
    public static readonly RULE_typeParam = 62;
    public static readonly RULE_constParam = 63;
    public static readonly RULE_whereClause = 64;
    public static readonly RULE_whereClauseItem = 65;
    public static readonly RULE_lifetimeWhereClauseItem = 66;
    public static readonly RULE_typeBoundWhereClauseItem = 67;
    public static readonly RULE_forLifetimes = 68;
    public static readonly RULE_associatedItem = 69;
    public static readonly RULE_innerAttribute = 70;
    public static readonly RULE_outerAttribute = 71;
    public static readonly RULE_attr = 72;
    public static readonly RULE_attrInput = 73;
    public static readonly RULE_statement = 74;
    public static readonly RULE_letStatement = 75;
    public static readonly RULE_expressionStatement = 76;
    public static readonly RULE_expression = 77;
    public static readonly RULE_comparisonOperator = 78;
    public static readonly RULE_compoundAssignOperator = 79;
    public static readonly RULE_expressionWithBlock = 80;
    public static readonly RULE_literalExpression = 81;
    public static readonly RULE_pathExpression = 82;
    public static readonly RULE_blockExpression = 83;
    public static readonly RULE_statements = 84;
    public static readonly RULE_asyncBlockExpression = 85;
    public static readonly RULE_unsafeBlockExpression = 86;
    public static readonly RULE_arrayElements = 87;
    public static readonly RULE_tupleElements = 88;
    public static readonly RULE_tupleIndex = 89;
    public static readonly RULE_structExpression = 90;
    public static readonly RULE_structExprStruct = 91;
    public static readonly RULE_structExprFields = 92;
    public static readonly RULE_structExprField = 93;
    public static readonly RULE_structBase = 94;
    public static readonly RULE_structExprTuple = 95;
    public static readonly RULE_structExprUnit = 96;
    public static readonly RULE_enumerationVariantExpression = 97;
    public static readonly RULE_enumExprStruct = 98;
    public static readonly RULE_enumExprFields = 99;
    public static readonly RULE_enumExprField = 100;
    public static readonly RULE_enumExprTuple = 101;
    public static readonly RULE_enumExprFieldless = 102;
    public static readonly RULE_callParams = 103;
    public static readonly RULE_closureExpression = 104;
    public static readonly RULE_closureParameters = 105;
    public static readonly RULE_closureParam = 106;
    public static readonly RULE_loopExpression = 107;
    public static readonly RULE_infiniteLoopExpression = 108;
    public static readonly RULE_predicateLoopExpression = 109;
    public static readonly RULE_predicatePatternLoopExpression = 110;
    public static readonly RULE_iteratorLoopExpression = 111;
    public static readonly RULE_loopLabel = 112;
    public static readonly RULE_ifExpression = 113;
    public static readonly RULE_ifLetExpression = 114;
    public static readonly RULE_matchExpression = 115;
    public static readonly RULE_matchArms = 116;
    public static readonly RULE_matchArmExpression = 117;
    public static readonly RULE_matchArm = 118;
    public static readonly RULE_matchArmGuard = 119;
    public static readonly RULE_pattern = 120;
    public static readonly RULE_patternNoTopAlt = 121;
    public static readonly RULE_patternWithoutRange = 122;
    public static readonly RULE_literalPattern = 123;
    public static readonly RULE_identifierPattern = 124;
    public static readonly RULE_wildcardPattern = 125;
    public static readonly RULE_restPattern = 126;
    public static readonly RULE_rangePattern = 127;
    public static readonly RULE_rangePatternBound = 128;
    public static readonly RULE_structPattern = 129;
    public static readonly RULE_structPatternElements = 130;
    public static readonly RULE_structPatternFields = 131;
    public static readonly RULE_structPatternField = 132;
    public static readonly RULE_structPatternEtCetera = 133;
    public static readonly RULE_tupleStructPattern = 134;
    public static readonly RULE_tupleStructItems = 135;
    public static readonly RULE_tuplePattern = 136;
    public static readonly RULE_tuplePatternItems = 137;
    public static readonly RULE_groupedPattern = 138;
    public static readonly RULE_slicePattern = 139;
    public static readonly RULE_slicePatternItems = 140;
    public static readonly RULE_pathPattern = 141;
    public static readonly RULE_type_ = 142;
    public static readonly RULE_unit_type = 143;
    public static readonly RULE_typeNoBounds = 144;
    public static readonly RULE_parenthesizedType = 145;
    public static readonly RULE_neverType = 146;
    public static readonly RULE_tupleType = 147;
    public static readonly RULE_arrayType = 148;
    public static readonly RULE_sliceType = 149;
    public static readonly RULE_referenceType = 150;
    public static readonly RULE_rawPointerType = 151;
    public static readonly RULE_bareFunctionType = 152;
    public static readonly RULE_functionTypeQualifiers = 153;
    public static readonly RULE_bareFunctionReturnType = 154;
    public static readonly RULE_functionParametersMaybeNamedVariadic = 155;
    public static readonly RULE_maybeNamedFunctionParameters = 156;
    public static readonly RULE_maybeNamedParam = 157;
    public static readonly RULE_maybeNamedFunctionParametersVariadic = 158;
    public static readonly RULE_traitObjectType = 159;
    public static readonly RULE_traitObjectTypeOneBound = 160;
    public static readonly RULE_implTraitType = 161;
    public static readonly RULE_implTraitTypeOneBound = 162;
    public static readonly RULE_inferredType = 163;
    public static readonly RULE_typeParamBounds = 164;
    public static readonly RULE_typeParamBound = 165;
    public static readonly RULE_traitBound = 166;
    public static readonly RULE_lifetimeBounds = 167;
    public static readonly RULE_lifetime = 168;
    public static readonly RULE_simplePath = 169;
    public static readonly RULE_simplePathSegment = 170;
    public static readonly RULE_pathInExpression = 171;
    public static readonly RULE_pathExprSegment = 172;
    public static readonly RULE_pathIdentSegment = 173;
    public static readonly RULE_genericArgs = 174;
    public static readonly RULE_genericArg = 175;
    public static readonly RULE_genericArgsConst = 176;
    public static readonly RULE_genericArgsLifetimes = 177;
    public static readonly RULE_genericArgsTypes = 178;
    public static readonly RULE_genericArgsBindings = 179;
    public static readonly RULE_genericArgsBinding = 180;
    public static readonly RULE_qualifiedPathInExpression = 181;
    public static readonly RULE_qualifiedPathType = 182;
    public static readonly RULE_qualifiedPathInType = 183;
    public static readonly RULE_typePath = 184;
    public static readonly RULE_typePathSegment = 185;
    public static readonly RULE_typePathFn = 186;
    public static readonly RULE_typePathInputs = 187;
    public static readonly RULE_visibility = 188;
    public static readonly RULE_identifier = 189;
    public static readonly RULE_keyword = 190;
    public static readonly RULE_macroIdentifierLikeToken = 191;
    public static readonly RULE_macroLiteralToken = 192;
    public static readonly RULE_macroPunctuationToken = 193;
    public static readonly RULE_shl = 194;
    public static readonly RULE_shr = 195;

    public static readonly literalNames = [
        null, "'as'", "'break'", "'const'", "'continue'", "'crate'", "'else'", 
        "'enum'", "'extern'", "'false'", "'fn'", "'for'", "'if'", "'impl'", 
        "'in'", "'let'", "'loop'", "'match'", "'mod'", "'move'", "'mut'", 
        "'pub'", "'ref'", "'return'", "'self'", "'Self'", "'static'", "'struct'", 
        "'super'", "'trait'", "'true'", "'type'", "'unsafe'", "'use'", "'where'", 
        "'while'", "'async'", "'await'", "'dyn'", "'abstract'", "'become'", 
        "'box'", "'do'", "'final'", "'macro'", "'override'", "'priv'", "'typeof'", 
        "'unsized'", "'virtual'", "'yield'", "'try'", "'union'", "''static'", 
        "'macro_rules'", "''_'", "'$crate'", null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "'+'", "'-'", 
        "'*'", "'/'", "'%'", "'^'", "'!'", "'&'", "'|'", "'||'", "'+='", 
        "'-='", "'*='", "'/='", "'%='", "'^='", "'&='", "'|='", "'<<='", 
        "'>>='", "'='", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'@'", 
        "'_'", "'.'", "'..'", "'...'", "'..='", "','", "';'", "':'", "'::'", 
        "'->'", "'=>'", "'#'", "'$'", "'?'", "'{'", "'}'", "'['", "']'", 
        "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "KW_AS", "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_CRATE", 
        "KW_ELSE", "KW_ENUM", "KW_EXTERN", "KW_FALSE", "KW_FN", "KW_FOR", 
        "KW_IF", "KW_IMPL", "KW_IN", "KW_LET", "KW_LOOP", "KW_MATCH", "KW_MOD", 
        "KW_MOVE", "KW_MUT", "KW_PUB", "KW_REF", "KW_RETURN", "KW_SELFVALUE", 
        "KW_SELFTYPE", "KW_STATIC", "KW_STRUCT", "KW_SUPER", "KW_TRAIT", 
        "KW_TRUE", "KW_TYPE", "KW_UNSAFE", "KW_USE", "KW_WHERE", "KW_WHILE", 
        "KW_ASYNC", "KW_AWAIT", "KW_DYN", "KW_ABSTRACT", "KW_BECOME", "KW_BOX", 
        "KW_DO", "KW_FINAL", "KW_MACRO", "KW_OVERRIDE", "KW_PRIV", "KW_TYPEOF", 
        "KW_UNSIZED", "KW_VIRTUAL", "KW_YIELD", "KW_TRY", "KW_UNION", "KW_STATICLIFETIME", 
        "KW_MACRORULES", "KW_UNDERLINELIFETIME", "KW_DOLLARCRATE", "NON_KEYWORD_IDENTIFIER", 
        "RAW_IDENTIFIER", "LINE_COMMENT", "BLOCK_COMMENT", "INNER_LINE_DOC", 
        "INNER_BLOCK_DOC", "OUTER_LINE_DOC", "OUTER_BLOCK_DOC", "BLOCK_COMMENT_OR_DOC", 
        "SHEBANG", "WHITESPACE", "NEWLINE", "CHAR_LITERAL", "STRING_LITERAL", 
        "RAW_STRING_LITERAL", "BYTE_LITERAL", "BYTE_STRING_LITERAL", "RAW_BYTE_STRING_LITERAL", 
        "INTEGER_LITERAL", "DEC_LITERAL", "HEX_LITERAL", "OCT_LITERAL", 
        "BIN_LITERAL", "FLOAT_LITERAL", "LIFETIME_OR_LABEL", "PLUS", "MINUS", 
        "STAR", "SLASH", "PERCENT", "CARET", "NOT", "AND", "OR", "OROR", 
        "PLUSEQ", "MINUSEQ", "STAREQ", "SLASHEQ", "PERCENTEQ", "CARETEQ", 
        "ANDEQ", "OREQ", "SHLEQ", "SHREQ", "EQ", "EQEQ", "NE", "GT", "LT", 
        "GE", "LE", "AT", "UNDERSCORE", "DOT", "DOTDOT", "DOTDOTDOT", "DOTDOTEQ", 
        "COMMA", "SEMI", "COLON", "PATHSEP", "RARROW", "FATARROW", "POUND", 
        "DOLLAR", "QUESTION", "LCURLYBRACE", "RCURLYBRACE", "LSQUAREBRACKET", 
        "RSQUAREBRACKET", "LPAREN", "RPAREN"
    ];
    public static readonly ruleNames = [
        "crate", "macroInvocation", "delimTokenTree", "tokenTree", "tokenTreeToken", 
        "macroInvocationSemi", "macroRulesDefinition", "macroRulesDef", 
        "macroRules", "macroRule", "macroMatcher", "macroMatch", "macroMatchToken", 
        "macroFragSpec", "macroRepSep", "macroRepOp", "macroTranscriber", 
        "item", "visItem", "macroItem", "module", "externCrate", "crateRef", 
        "asClause", "useDeclaration", "useTree", "function_", "functionQualifiers", 
        "abi", "functionParameters", "selfParam", "shorthandSelf", "typedSelf", 
        "functionParam", "functionParamPattern", "functionReturnType", "typeAlias", 
        "struct_", "structStruct", "tupleStruct", "structFields", "structField", 
        "tupleFields", "tupleField", "enumeration", "enumItems", "enumItem", 
        "enumItemTuple", "enumItemStruct", "enumItemDiscriminant", "union_", 
        "constantItem", "staticItem", "trait_", "implementation", "inherentImpl", 
        "traitImpl", "externBlock", "externalItem", "genericParams", "genericParam", 
        "lifetimeParam", "typeParam", "constParam", "whereClause", "whereClauseItem", 
        "lifetimeWhereClauseItem", "typeBoundWhereClauseItem", "forLifetimes", 
        "associatedItem", "innerAttribute", "outerAttribute", "attr", "attrInput", 
        "statement", "letStatement", "expressionStatement", "expression", 
        "comparisonOperator", "compoundAssignOperator", "expressionWithBlock", 
        "literalExpression", "pathExpression", "blockExpression", "statements", 
        "asyncBlockExpression", "unsafeBlockExpression", "arrayElements", 
        "tupleElements", "tupleIndex", "structExpression", "structExprStruct", 
        "structExprFields", "structExprField", "structBase", "structExprTuple", 
        "structExprUnit", "enumerationVariantExpression", "enumExprStruct", 
        "enumExprFields", "enumExprField", "enumExprTuple", "enumExprFieldless", 
        "callParams", "closureExpression", "closureParameters", "closureParam", 
        "loopExpression", "infiniteLoopExpression", "predicateLoopExpression", 
        "predicatePatternLoopExpression", "iteratorLoopExpression", "loopLabel", 
        "ifExpression", "ifLetExpression", "matchExpression", "matchArms", 
        "matchArmExpression", "matchArm", "matchArmGuard", "pattern", "patternNoTopAlt", 
        "patternWithoutRange", "literalPattern", "identifierPattern", "wildcardPattern", 
        "restPattern", "rangePattern", "rangePatternBound", "structPattern", 
        "structPatternElements", "structPatternFields", "structPatternField", 
        "structPatternEtCetera", "tupleStructPattern", "tupleStructItems", 
        "tuplePattern", "tuplePatternItems", "groupedPattern", "slicePattern", 
        "slicePatternItems", "pathPattern", "type_", "unit_type", "typeNoBounds", 
        "parenthesizedType", "neverType", "tupleType", "arrayType", "sliceType", 
        "referenceType", "rawPointerType", "bareFunctionType", "functionTypeQualifiers", 
        "bareFunctionReturnType", "functionParametersMaybeNamedVariadic", 
        "maybeNamedFunctionParameters", "maybeNamedParam", "maybeNamedFunctionParametersVariadic", 
        "traitObjectType", "traitObjectTypeOneBound", "implTraitType", "implTraitTypeOneBound", 
        "inferredType", "typeParamBounds", "typeParamBound", "traitBound", 
        "lifetimeBounds", "lifetime", "simplePath", "simplePathSegment", 
        "pathInExpression", "pathExprSegment", "pathIdentSegment", "genericArgs", 
        "genericArg", "genericArgsConst", "genericArgsLifetimes", "genericArgsTypes", 
        "genericArgsBindings", "genericArgsBinding", "qualifiedPathInExpression", 
        "qualifiedPathType", "qualifiedPathInType", "typePath", "typePathSegment", 
        "typePathFn", "typePathInputs", "visibility", "identifier", "keyword", 
        "macroIdentifierLikeToken", "macroLiteralToken", "macroPunctuationToken", 
        "shl", "shr",
    ];

    public get grammarFileName(): string { return "RustParser.g4"; }
    public get literalNames(): (string | null)[] { return RustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustParser.symbolicNames; }
    public get ruleNames(): string[] { return RustParser.ruleNames; }
    public get serializedATN(): number[] { return RustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustParser._ATN, RustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public crate(): CrateContext {
        let localContext = new CrateContext(this.context, this.state);
        this.enterRule(localContext, 0, RustParser.RULE_crate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 395;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 10) {
                {
                {
                this.state = 392;
                this.function_();
                }
                }
                this.state = 397;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 398;
            this.match(RustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroInvocation(): MacroInvocationContext {
        let localContext = new MacroInvocationContext(this.context, this.state);
        this.enterRule(localContext, 2, RustParser.RULE_macroInvocation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            this.simplePath();
            this.state = 401;
            this.match(RustParser.NOT);
            this.state = 402;
            this.delimTokenTree();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delimTokenTree(): DelimTokenTreeContext {
        let localContext = new DelimTokenTreeContext(this.context, this.state);
        this.enterRule(localContext, 4, RustParser.RULE_delimTokenTree);
        let _la: number;
        try {
            this.state = 428;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 404;
                this.match(RustParser.LPAREN);
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 405;
                    this.tokenTree();
                    }
                    }
                    this.state = 410;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 411;
                this.match(RustParser.RPAREN);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 412;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 416;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 413;
                    this.tokenTree();
                    }
                    }
                    this.state = 418;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 419;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 420;
                this.match(RustParser.LCURLYBRACE);
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 421;
                    this.tokenTree();
                    }
                    }
                    this.state = 426;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 427;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tokenTree(): TokenTreeContext {
        let localContext = new TokenTreeContext(this.context, this.state);
        this.enterRule(localContext, 6, RustParser.RULE_tokenTree);
        try {
            let alternative: number;
            this.state = 436;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_AS:
            case RustParser.KW_BREAK:
            case RustParser.KW_CONST:
            case RustParser.KW_CONTINUE:
            case RustParser.KW_CRATE:
            case RustParser.KW_ELSE:
            case RustParser.KW_ENUM:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FALSE:
            case RustParser.KW_FN:
            case RustParser.KW_FOR:
            case RustParser.KW_IF:
            case RustParser.KW_IMPL:
            case RustParser.KW_IN:
            case RustParser.KW_LET:
            case RustParser.KW_LOOP:
            case RustParser.KW_MATCH:
            case RustParser.KW_MOD:
            case RustParser.KW_MOVE:
            case RustParser.KW_MUT:
            case RustParser.KW_PUB:
            case RustParser.KW_REF:
            case RustParser.KW_RETURN:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_STATIC:
            case RustParser.KW_STRUCT:
            case RustParser.KW_SUPER:
            case RustParser.KW_TRAIT:
            case RustParser.KW_TRUE:
            case RustParser.KW_TYPE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_USE:
            case RustParser.KW_WHERE:
            case RustParser.KW_WHILE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_AWAIT:
            case RustParser.KW_DYN:
            case RustParser.KW_ABSTRACT:
            case RustParser.KW_BECOME:
            case RustParser.KW_BOX:
            case RustParser.KW_DO:
            case RustParser.KW_FINAL:
            case RustParser.KW_MACRO:
            case RustParser.KW_OVERRIDE:
            case RustParser.KW_PRIV:
            case RustParser.KW_TYPEOF:
            case RustParser.KW_UNSIZED:
            case RustParser.KW_VIRTUAL:
            case RustParser.KW_YIELD:
            case RustParser.KW_TRY:
            case RustParser.KW_UNION:
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.PLUS:
            case RustParser.MINUS:
            case RustParser.STAR:
            case RustParser.SLASH:
            case RustParser.PERCENT:
            case RustParser.CARET:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.OR:
            case RustParser.OROR:
            case RustParser.PLUSEQ:
            case RustParser.MINUSEQ:
            case RustParser.STAREQ:
            case RustParser.SLASHEQ:
            case RustParser.PERCENTEQ:
            case RustParser.CARETEQ:
            case RustParser.ANDEQ:
            case RustParser.OREQ:
            case RustParser.SHLEQ:
            case RustParser.SHREQ:
            case RustParser.EQ:
            case RustParser.EQEQ:
            case RustParser.NE:
            case RustParser.GT:
            case RustParser.LT:
            case RustParser.GE:
            case RustParser.LE:
            case RustParser.AT:
            case RustParser.UNDERSCORE:
            case RustParser.DOT:
            case RustParser.DOTDOT:
            case RustParser.DOTDOTDOT:
            case RustParser.DOTDOTEQ:
            case RustParser.COMMA:
            case RustParser.SEMI:
            case RustParser.COLON:
            case RustParser.PATHSEP:
            case RustParser.RARROW:
            case RustParser.FATARROW:
            case RustParser.POUND:
            case RustParser.DOLLAR:
            case RustParser.QUESTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 431;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 430;
                        this.tokenTreeToken();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 433;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 435;
                this.delimTokenTree();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tokenTreeToken(): TokenTreeTokenContext {
        let localContext = new TokenTreeTokenContext(this.context, this.state);
        this.enterRule(localContext, 8, RustParser.RULE_tokenTreeToken);
        try {
            this.state = 443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 438;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 439;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 440;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 441;
                this.macroRepOp();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 442;
                this.match(RustParser.DOLLAR);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroInvocationSemi(): MacroInvocationSemiContext {
        let localContext = new MacroInvocationSemiContext(this.context, this.state);
        this.enterRule(localContext, 10, RustParser.RULE_macroInvocationSemi);
        let _la: number;
        try {
            this.state = 480;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 445;
                this.simplePath();
                this.state = 446;
                this.match(RustParser.NOT);
                this.state = 447;
                this.match(RustParser.LPAREN);
                this.state = 451;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 448;
                    this.tokenTree();
                    }
                    }
                    this.state = 453;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 454;
                this.match(RustParser.RPAREN);
                this.state = 455;
                this.match(RustParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 457;
                this.simplePath();
                this.state = 458;
                this.match(RustParser.NOT);
                this.state = 459;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 460;
                    this.tokenTree();
                    }
                    }
                    this.state = 465;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 466;
                this.match(RustParser.RSQUAREBRACKET);
                this.state = 467;
                this.match(RustParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 469;
                this.simplePath();
                this.state = 470;
                this.match(RustParser.NOT);
                this.state = 471;
                this.match(RustParser.LCURLYBRACE);
                this.state = 475;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 472;
                    this.tokenTree();
                    }
                    }
                    this.state = 477;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 478;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRulesDefinition(): MacroRulesDefinitionContext {
        let localContext = new MacroRulesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, RustParser.RULE_macroRulesDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 482;
            this.match(RustParser.KW_MACRORULES);
            this.state = 483;
            this.match(RustParser.NOT);
            this.state = 484;
            this.identifier();
            this.state = 485;
            this.macroRulesDef();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRulesDef(): MacroRulesDefContext {
        let localContext = new MacroRulesDefContext(this.context, this.state);
        this.enterRule(localContext, 14, RustParser.RULE_macroRulesDef);
        try {
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 487;
                this.match(RustParser.LPAREN);
                this.state = 488;
                this.macroRules();
                this.state = 489;
                this.match(RustParser.RPAREN);
                this.state = 490;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 492;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 493;
                this.macroRules();
                this.state = 494;
                this.match(RustParser.RSQUAREBRACKET);
                this.state = 495;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 497;
                this.match(RustParser.LCURLYBRACE);
                this.state = 498;
                this.macroRules();
                this.state = 499;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRules(): MacroRulesContext {
        let localContext = new MacroRulesContext(this.context, this.state);
        this.enterRule(localContext, 16, RustParser.RULE_macroRules);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 503;
            this.macroRule();
            this.state = 508;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 504;
                    this.match(RustParser.SEMI);
                    this.state = 505;
                    this.macroRule();
                    }
                    }
                }
                this.state = 510;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 512;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 511;
                this.match(RustParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRule(): MacroRuleContext {
        let localContext = new MacroRuleContext(this.context, this.state);
        this.enterRule(localContext, 18, RustParser.RULE_macroRule);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 514;
            this.macroMatcher();
            this.state = 515;
            this.match(RustParser.FATARROW);
            this.state = 516;
            this.macroTranscriber();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatcher(): MacroMatcherContext {
        let localContext = new MacroMatcherContext(this.context, this.state);
        this.enterRule(localContext, 20, RustParser.RULE_macroMatcher);
        let _la: number;
        try {
            this.state = 542;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 518;
                this.match(RustParser.LPAREN);
                this.state = 522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 519;
                    this.macroMatch();
                    }
                    }
                    this.state = 524;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 525;
                this.match(RustParser.RPAREN);
                }
                break;
            case RustParser.LSQUAREBRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 526;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 530;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 527;
                    this.macroMatch();
                    }
                    }
                    this.state = 532;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 533;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 534;
                this.match(RustParser.LCURLYBRACE);
                this.state = 538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0)) {
                    {
                    {
                    this.state = 535;
                    this.macroMatch();
                    }
                    }
                    this.state = 540;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 541;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatch(): MacroMatchContext {
        let localContext = new MacroMatchContext(this.context, this.state);
        this.enterRule(localContext, 22, RustParser.RULE_macroMatch);
        let _la: number;
        try {
            let alternative: number;
            this.state = 570;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 545;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 544;
                        this.macroMatchToken();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 547;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 549;
                this.macroMatcher();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 550;
                this.match(RustParser.DOLLAR);
                this.state = 553;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 551;
                    this.identifier();
                    }
                    break;
                case RustParser.KW_SELFVALUE:
                    {
                    this.state = 552;
                    this.match(RustParser.KW_SELFVALUE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 555;
                this.match(RustParser.COLON);
                this.state = 556;
                this.macroFragSpec();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 557;
                this.match(RustParser.DOLLAR);
                this.state = 558;
                this.match(RustParser.LPAREN);
                this.state = 560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 559;
                    this.macroMatch();
                    }
                    }
                    this.state = 562;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294965375) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 184549375) !== 0));
                this.state = 564;
                this.match(RustParser.RPAREN);
                this.state = 566;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 134217727) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4294924415) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4194303) !== 0)) {
                    {
                    this.state = 565;
                    this.macroRepSep();
                    }
                }

                this.state = 568;
                this.macroRepOp();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroMatchToken(): MacroMatchTokenContext {
        let localContext = new MacroMatchTokenContext(this.context, this.state);
        this.enterRule(localContext, 24, RustParser.RULE_macroMatchToken);
        try {
            this.state = 576;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 572;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 573;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 574;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 575;
                this.macroRepOp();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroFragSpec(): MacroFragSpecContext {
        let localContext = new MacroFragSpecContext(this.context, this.state);
        this.enterRule(localContext, 26, RustParser.RULE_macroFragSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 578;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRepSep(): MacroRepSepContext {
        let localContext = new MacroRepSepContext(this.context, this.state);
        this.enterRule(localContext, 28, RustParser.RULE_macroRepSep);
        try {
            this.state = 584;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 580;
                this.macroIdentifierLikeToken();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 581;
                this.macroLiteralToken();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 582;
                this.macroPunctuationToken();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 583;
                this.match(RustParser.DOLLAR);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroRepOp(): MacroRepOpContext {
        let localContext = new MacroRepOpContext(this.context, this.state);
        this.enterRule(localContext, 30, RustParser.RULE_macroRepOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 586;
            _la = this.tokenStream.LA(1);
            if(!(_la === 82 || _la === 84 || _la === 123)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroTranscriber(): MacroTranscriberContext {
        let localContext = new MacroTranscriberContext(this.context, this.state);
        this.enterRule(localContext, 32, RustParser.RULE_macroTranscriber);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            this.delimTokenTree();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public item(): ItemContext {
        let localContext = new ItemContext(this.context, this.state);
        this.enterRule(localContext, 34, RustParser.RULE_item);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 590;
                this.outerAttribute();
                }
                }
                this.state = 595;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 598;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CONST:
            case RustParser.KW_ENUM:
            case RustParser.KW_EXTERN:
            case RustParser.KW_FN:
            case RustParser.KW_IMPL:
            case RustParser.KW_MOD:
            case RustParser.KW_PUB:
            case RustParser.KW_STATIC:
            case RustParser.KW_STRUCT:
            case RustParser.KW_TRAIT:
            case RustParser.KW_TYPE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_USE:
            case RustParser.KW_UNION:
                {
                this.state = 596;
                this.visItem();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 597;
                this.macroItem();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visItem(): VisItemContext {
        let localContext = new VisItemContext(this.context, this.state);
        this.enterRule(localContext, 36, RustParser.RULE_visItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 600;
                this.visibility();
                }
            }

            this.state = 616;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                {
                this.state = 603;
                this.module_();
                }
                break;
            case 2:
                {
                this.state = 604;
                this.externCrate();
                }
                break;
            case 3:
                {
                this.state = 605;
                this.useDeclaration();
                }
                break;
            case 4:
                {
                this.state = 606;
                this.function_();
                }
                break;
            case 5:
                {
                this.state = 607;
                this.typeAlias();
                }
                break;
            case 6:
                {
                this.state = 608;
                this.struct_();
                }
                break;
            case 7:
                {
                this.state = 609;
                this.enumeration();
                }
                break;
            case 8:
                {
                this.state = 610;
                this.union_();
                }
                break;
            case 9:
                {
                this.state = 611;
                this.constantItem();
                }
                break;
            case 10:
                {
                this.state = 612;
                this.staticItem();
                }
                break;
            case 11:
                {
                this.state = 613;
                this.trait_();
                }
                break;
            case 12:
                {
                this.state = 614;
                this.implementation();
                }
                break;
            case 13:
                {
                this.state = 615;
                this.externBlock();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroItem(): MacroItemContext {
        let localContext = new MacroItemContext(this.context, this.state);
        this.enterRule(localContext, 38, RustParser.RULE_macroItem);
        try {
            this.state = 620;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 618;
                this.macroInvocationSemi();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 619;
                this.macroRulesDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public module_(): ModuleContext {
        let localContext = new ModuleContext(this.context, this.state);
        this.enterRule(localContext, 40, RustParser.RULE_module);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 623;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 622;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 625;
            this.match(RustParser.KW_MOD);
            this.state = 626;
            this.identifier();
            this.state = 642;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.SEMI:
                {
                this.state = 627;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.LCURLYBRACE:
                {
                this.state = 628;
                this.match(RustParser.LCURLYBRACE);
                this.state = 632;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 629;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 634;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                }
                this.state = 638;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3173262760) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 122683395) !== 0) || _la === 118 || _la === 121) {
                    {
                    {
                    this.state = 635;
                    this.item();
                    }
                    }
                    this.state = 640;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 641;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externCrate(): ExternCrateContext {
        let localContext = new ExternCrateContext(this.context, this.state);
        this.enterRule(localContext, 42, RustParser.RULE_externCrate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 644;
            this.match(RustParser.KW_EXTERN);
            this.state = 645;
            this.match(RustParser.KW_CRATE);
            this.state = 646;
            this.crateRef();
            this.state = 648;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 647;
                this.asClause();
                }
            }

            this.state = 650;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public crateRef(): CrateRefContext {
        let localContext = new CrateRefContext(this.context, this.state);
        this.enterRule(localContext, 44, RustParser.RULE_crateRef);
        try {
            this.state = 654;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 652;
                this.identifier();
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 653;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asClause(): AsClauseContext {
        let localContext = new AsClauseContext(this.context, this.state);
        this.enterRule(localContext, 46, RustParser.RULE_asClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 656;
            this.match(RustParser.KW_AS);
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                {
                this.state = 657;
                this.identifier();
                }
                break;
            case RustParser.UNDERSCORE:
                {
                this.state = 658;
                this.match(RustParser.UNDERSCORE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useDeclaration(): UseDeclarationContext {
        let localContext = new UseDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 48, RustParser.RULE_useDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 661;
            this.match(RustParser.KW_USE);
            this.state = 662;
            this.useTree();
            this.state = 663;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useTree(): UseTreeContext {
        let localContext = new UseTreeContext(this.context, this.state);
        this.enterRule(localContext, 50, RustParser.RULE_useTree);
        let _la: number;
        try {
            let alternative: number;
            this.state = 697;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 669;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 285212704) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 118) {
                    {
                    this.state = 666;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
                    case 1:
                        {
                        this.state = 665;
                        this.simplePath();
                        }
                        break;
                    }
                    this.state = 668;
                    this.match(RustParser.PATHSEP);
                    }
                }

                this.state = 687;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.STAR:
                    {
                    this.state = 671;
                    this.match(RustParser.STAR);
                    }
                    break;
                case RustParser.LCURLYBRACE:
                    {
                    this.state = 672;
                    this.match(RustParser.LCURLYBRACE);
                    this.state = 684;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 285212704) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 1073741853) !== 0) || _la === 118 || _la === 124) {
                        {
                        this.state = 673;
                        this.useTree();
                        this.state = 678;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 674;
                                this.match(RustParser.COMMA);
                                this.state = 675;
                                this.useTree();
                                }
                                }
                            }
                            this.state = 680;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                        }
                        this.state = 682;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 115) {
                            {
                            this.state = 681;
                            this.match(RustParser.COMMA);
                            }
                        }

                        }
                    }

                    this.state = 686;
                    this.match(RustParser.RCURLYBRACE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 689;
                this.simplePath();
                this.state = 695;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 690;
                    this.match(RustParser.KW_AS);
                    this.state = 693;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case RustParser.KW_MACRORULES:
                    case RustParser.NON_KEYWORD_IDENTIFIER:
                    case RustParser.RAW_IDENTIFIER:
                        {
                        this.state = 691;
                        this.identifier();
                        }
                        break;
                    case RustParser.UNDERSCORE:
                        {
                        this.state = 692;
                        this.match(RustParser.UNDERSCORE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): Function_Context {
        let localContext = new Function_Context(this.context, this.state);
        this.enterRule(localContext, 52, RustParser.RULE_function_);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 699;
            this.match(RustParser.KW_FN);
            this.state = 700;
            this.identifier();
            this.state = 701;
            this.match(RustParser.LPAREN);
            this.state = 703;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0)) {
                {
                this.state = 702;
                this.functionParameters();
                }
            }

            this.state = 705;
            this.match(RustParser.RPAREN);
            this.state = 707;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 706;
                this.functionReturnType();
                }
            }

            this.state = 709;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionQualifiers(): FunctionQualifiersContext {
        let localContext = new FunctionQualifiersContext(this.context, this.state);
        this.enterRule(localContext, 54, RustParser.RULE_functionQualifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 712;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 711;
                this.match(RustParser.KW_CONST);
                }
            }

            this.state = 715;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 714;
                this.match(RustParser.KW_ASYNC);
                }
            }

            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 717;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 724;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 720;
                this.match(RustParser.KW_EXTERN);
                this.state = 722;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71) {
                    {
                    this.state = 721;
                    this.abi();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public abi(): AbiContext {
        let localContext = new AbiContext(this.context, this.state);
        this.enterRule(localContext, 56, RustParser.RULE_abi);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 726;
            _la = this.tokenStream.LA(1);
            if(!(_la === 70 || _la === 71)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParameters(): FunctionParametersContext {
        let localContext = new FunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 58, RustParser.RULE_functionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 728;
            this.functionParam();
            this.state = 733;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 729;
                    this.match(RustParser.COMMA);
                    this.state = 730;
                    this.functionParam();
                    }
                    }
                }
                this.state = 735;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            }
            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 736;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selfParam(): SelfParamContext {
        let localContext = new SelfParamContext(this.context, this.state);
        this.enterRule(localContext, 60, RustParser.RULE_selfParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 742;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 739;
                this.outerAttribute();
                }
                }
                this.state = 744;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 747;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                {
                this.state = 745;
                this.shorthandSelf();
                }
                break;
            case 2:
                {
                this.state = 746;
                this.typedSelf();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shorthandSelf(): ShorthandSelfContext {
        let localContext = new ShorthandSelfContext(this.context, this.state);
        this.enterRule(localContext, 62, RustParser.RULE_shorthandSelf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 753;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 749;
                this.match(RustParser.AND);
                this.state = 751;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0)) {
                    {
                    this.state = 750;
                    this.lifetime();
                    }
                }

                }
            }

            this.state = 756;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 755;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 758;
            this.match(RustParser.KW_SELFVALUE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typedSelf(): TypedSelfContext {
        let localContext = new TypedSelfContext(this.context, this.state);
        this.enterRule(localContext, 64, RustParser.RULE_typedSelf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 761;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 760;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 763;
            this.match(RustParser.KW_SELFVALUE);
            this.state = 764;
            this.match(RustParser.COLON);
            this.state = 765;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParam(): FunctionParamContext {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 66, RustParser.RULE_functionParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 767;
            this.identifier();
            this.state = 768;
            this.match(RustParser.COLON);
            this.state = 769;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParamPattern(): FunctionParamPatternContext {
        let localContext = new FunctionParamPatternContext(this.context, this.state);
        this.enterRule(localContext, 68, RustParser.RULE_functionParamPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 771;
            this.pattern();
            this.state = 772;
            this.match(RustParser.COLON);
            this.state = 775;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.AND:
            case RustParser.LPAREN:
                {
                this.state = 773;
                this.type_();
                }
                break;
            case RustParser.DOTDOTDOT:
                {
                this.state = 774;
                this.match(RustParser.DOTDOTDOT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionReturnType(): FunctionReturnTypeContext {
        let localContext = new FunctionReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 70, RustParser.RULE_functionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 777;
            this.match(RustParser.RARROW);
            this.state = 778;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeAlias(): TypeAliasContext {
        let localContext = new TypeAliasContext(this.context, this.state);
        this.enterRule(localContext, 72, RustParser.RULE_typeAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 780;
            this.match(RustParser.KW_TYPE);
            this.state = 781;
            this.identifier();
            this.state = 783;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 782;
                this.genericParams();
                }
            }

            this.state = 786;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 785;
                this.whereClause();
                }
            }

            this.state = 790;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 788;
                this.match(RustParser.EQ);
                this.state = 789;
                this.type_();
                }
            }

            this.state = 792;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public struct_(): Struct_Context {
        let localContext = new Struct_Context(this.context, this.state);
        this.enterRule(localContext, 74, RustParser.RULE_struct_);
        try {
            this.state = 796;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 794;
                this.structStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 795;
                this.tupleStruct();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structStruct(): StructStructContext {
        let localContext = new StructStructContext(this.context, this.state);
        this.enterRule(localContext, 76, RustParser.RULE_structStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 798;
            this.match(RustParser.KW_STRUCT);
            this.state = 799;
            this.identifier();
            this.state = 801;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 800;
                this.genericParams();
                }
            }

            this.state = 804;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 803;
                this.whereClause();
                }
            }

            this.state = 812;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
                {
                this.state = 806;
                this.match(RustParser.LCURLYBRACE);
                this.state = 808;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 121) {
                    {
                    this.state = 807;
                    this.structFields();
                    }
                }

                this.state = 810;
                this.match(RustParser.RCURLYBRACE);
                }
                break;
            case RustParser.SEMI:
                {
                this.state = 811;
                this.match(RustParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStruct(): TupleStructContext {
        let localContext = new TupleStructContext(this.context, this.state);
        this.enterRule(localContext, 78, RustParser.RULE_tupleStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 814;
            this.match(RustParser.KW_STRUCT);
            this.state = 815;
            this.identifier();
            this.state = 817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 816;
                this.genericParams();
                }
            }

            this.state = 819;
            this.match(RustParser.LPAREN);
            this.state = 821;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 121 || _la === 128) {
                {
                this.state = 820;
                this.tupleFields();
                }
            }

            this.state = 823;
            this.match(RustParser.RPAREN);
            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 824;
                this.whereClause();
                }
            }

            this.state = 827;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structFields(): StructFieldsContext {
        let localContext = new StructFieldsContext(this.context, this.state);
        this.enterRule(localContext, 80, RustParser.RULE_structFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 829;
            this.structField();
            this.state = 834;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 830;
                    this.match(RustParser.COMMA);
                    this.state = 831;
                    this.structField();
                    }
                    }
                }
                this.state = 836;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            this.state = 838;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 837;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structField(): StructFieldContext {
        let localContext = new StructFieldContext(this.context, this.state);
        this.enterRule(localContext, 82, RustParser.RULE_structField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 843;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 840;
                this.outerAttribute();
                }
                }
                this.state = 845;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 847;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 846;
                this.visibility();
                }
            }

            this.state = 849;
            this.identifier();
            this.state = 850;
            this.match(RustParser.COLON);
            this.state = 851;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleFields(): TupleFieldsContext {
        let localContext = new TupleFieldsContext(this.context, this.state);
        this.enterRule(localContext, 84, RustParser.RULE_tupleFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 853;
            this.tupleField();
            this.state = 858;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 854;
                    this.match(RustParser.COMMA);
                    this.state = 855;
                    this.tupleField();
                    }
                    }
                }
                this.state = 860;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
            }
            this.state = 862;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 861;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleField(): TupleFieldContext {
        let localContext = new TupleFieldContext(this.context, this.state);
        this.enterRule(localContext, 86, RustParser.RULE_tupleField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 867;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 864;
                this.outerAttribute();
                }
                }
                this.state = 869;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 871;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 870;
                this.visibility();
                }
            }

            this.state = 873;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumeration(): EnumerationContext {
        let localContext = new EnumerationContext(this.context, this.state);
        this.enterRule(localContext, 88, RustParser.RULE_enumeration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 875;
            this.match(RustParser.KW_ENUM);
            this.state = 876;
            this.identifier();
            this.state = 878;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 877;
                this.genericParams();
                }
            }

            this.state = 881;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 880;
                this.whereClause();
                }
            }

            this.state = 883;
            this.match(RustParser.LCURLYBRACE);
            this.state = 885;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 121) {
                {
                this.state = 884;
                this.enumItems();
                }
            }

            this.state = 887;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItems(): EnumItemsContext {
        let localContext = new EnumItemsContext(this.context, this.state);
        this.enterRule(localContext, 90, RustParser.RULE_enumItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 889;
            this.enumItem();
            this.state = 894;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 890;
                    this.match(RustParser.COMMA);
                    this.state = 891;
                    this.enumItem();
                    }
                    }
                }
                this.state = 896;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            }
            this.state = 898;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 897;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItem(): EnumItemContext {
        let localContext = new EnumItemContext(this.context, this.state);
        this.enterRule(localContext, 92, RustParser.RULE_enumItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 903;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 900;
                this.outerAttribute();
                }
                }
                this.state = 905;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 907;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 906;
                this.visibility();
                }
            }

            this.state = 909;
            this.identifier();
            this.state = 913;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LPAREN:
                {
                this.state = 910;
                this.enumItemTuple();
                }
                break;
            case RustParser.LCURLYBRACE:
                {
                this.state = 911;
                this.enumItemStruct();
                }
                break;
            case RustParser.EQ:
                {
                this.state = 912;
                this.enumItemDiscriminant();
                }
                break;
            case RustParser.COMMA:
            case RustParser.RCURLYBRACE:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemTuple(): EnumItemTupleContext {
        let localContext = new EnumItemTupleContext(this.context, this.state);
        this.enterRule(localContext, 94, RustParser.RULE_enumItemTuple);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 915;
            this.match(RustParser.LPAREN);
            this.state = 917;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 121 || _la === 128) {
                {
                this.state = 916;
                this.tupleFields();
                }
            }

            this.state = 919;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemStruct(): EnumItemStructContext {
        let localContext = new EnumItemStructContext(this.context, this.state);
        this.enterRule(localContext, 96, RustParser.RULE_enumItemStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 921;
            this.match(RustParser.LCURLYBRACE);
            this.state = 923;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 121) {
                {
                this.state = 922;
                this.structFields();
                }
            }

            this.state = 925;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumItemDiscriminant(): EnumItemDiscriminantContext {
        let localContext = new EnumItemDiscriminantContext(this.context, this.state);
        this.enterRule(localContext, 98, RustParser.RULE_enumItemDiscriminant);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 927;
            this.match(RustParser.EQ);
            this.state = 928;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public union_(): Union_Context {
        let localContext = new Union_Context(this.context, this.state);
        this.enterRule(localContext, 100, RustParser.RULE_union_);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.match(RustParser.KW_UNION);
            this.state = 931;
            this.identifier();
            this.state = 933;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 932;
                this.genericParams();
                }
            }

            this.state = 936;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 935;
                this.whereClause();
                }
            }

            this.state = 938;
            this.match(RustParser.LCURLYBRACE);
            this.state = 939;
            this.structFields();
            this.state = 940;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantItem(): ConstantItemContext {
        let localContext = new ConstantItemContext(this.context, this.state);
        this.enterRule(localContext, 102, RustParser.RULE_constantItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 942;
            this.match(RustParser.KW_CONST);
            this.state = 945;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                {
                this.state = 943;
                this.identifier();
                }
                break;
            case RustParser.UNDERSCORE:
                {
                this.state = 944;
                this.match(RustParser.UNDERSCORE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 947;
            this.match(RustParser.COLON);
            this.state = 948;
            this.type_();
            this.state = 951;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 949;
                this.match(RustParser.EQ);
                this.state = 950;
                this.expression(0);
                }
            }

            this.state = 953;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public staticItem(): StaticItemContext {
        let localContext = new StaticItemContext(this.context, this.state);
        this.enterRule(localContext, 104, RustParser.RULE_staticItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 955;
            this.match(RustParser.KW_STATIC);
            this.state = 957;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 956;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 959;
            this.identifier();
            this.state = 960;
            this.match(RustParser.COLON);
            this.state = 961;
            this.type_();
            this.state = 964;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 962;
                this.match(RustParser.EQ);
                this.state = 963;
                this.expression(0);
                }
            }

            this.state = 966;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trait_(): Trait_Context {
        let localContext = new Trait_Context(this.context, this.state);
        this.enterRule(localContext, 106, RustParser.RULE_trait_);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 969;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 968;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 971;
            this.match(RustParser.KW_TRAIT);
            this.state = 972;
            this.identifier();
            this.state = 974;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 973;
                this.genericParams();
                }
            }

            this.state = 980;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 976;
                this.match(RustParser.COLON);
                this.state = 978;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 1057) !== 0)) {
                    {
                    this.state = 977;
                    this.typeParamBounds();
                    }
                }

                }
            }

            this.state = 983;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 982;
                this.whereClause();
                }
            }

            this.state = 985;
            this.match(RustParser.LCURLYBRACE);
            this.state = 989;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 986;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 991;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            }
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794536) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 118 || _la === 121) {
                {
                {
                this.state = 992;
                this.associatedItem();
                }
                }
                this.state = 997;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 998;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implementation(): ImplementationContext {
        let localContext = new ImplementationContext(this.context, this.state);
        this.enterRule(localContext, 108, RustParser.RULE_implementation);
        try {
            this.state = 1002;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1000;
                this.inherentImpl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1001;
                this.traitImpl();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inherentImpl(): InherentImplContext {
        let localContext = new InherentImplContext(this.context, this.state);
        this.enterRule(localContext, 110, RustParser.RULE_inherentImpl);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1004;
            this.match(RustParser.KW_IMPL);
            this.state = 1006;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 1005;
                this.genericParams();
                }
            }

            this.state = 1008;
            this.type_();
            this.state = 1010;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1009;
                this.whereClause();
                }
            }

            this.state = 1012;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1016;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 108, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1013;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1018;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 108, this.context);
            }
            this.state = 1022;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794536) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 118 || _la === 121) {
                {
                {
                this.state = 1019;
                this.associatedItem();
                }
                }
                this.state = 1024;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1025;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitImpl(): TraitImplContext {
        let localContext = new TraitImplContext(this.context, this.state);
        this.enterRule(localContext, 112, RustParser.RULE_traitImpl);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1028;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 1027;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 1030;
            this.match(RustParser.KW_IMPL);
            this.state = 1032;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 106) {
                {
                this.state = 1031;
                this.genericParams();
                }
            }

            this.state = 1035;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 88) {
                {
                this.state = 1034;
                this.match(RustParser.NOT);
                }
            }

            this.state = 1037;
            this.typePath();
            this.state = 1038;
            this.match(RustParser.KW_FOR);
            this.state = 1039;
            this.type_();
            this.state = 1041;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1040;
                this.whereClause();
                }
            }

            this.state = 1043;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1047;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1044;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1049;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 114, this.context);
            }
            this.state = 1053;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2434794536) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 118 || _la === 121) {
                {
                {
                this.state = 1050;
                this.associatedItem();
                }
                }
                this.state = 1055;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1056;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externBlock(): ExternBlockContext {
        let localContext = new ExternBlockContext(this.context, this.state);
        this.enterRule(localContext, 114, RustParser.RULE_externBlock);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 1058;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 1061;
            this.match(RustParser.KW_EXTERN);
            this.state = 1063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70 || _la === 71) {
                {
                this.state = 1062;
                this.abi();
                }
            }

            this.state = 1065;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1069;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 118, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1066;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1071;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 118, this.context);
            }
            this.state = 1075;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 354419744) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 29) !== 0) || _la === 118 || _la === 121) {
                {
                {
                this.state = 1072;
                this.externalItem();
                }
                }
                this.state = 1077;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1078;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public externalItem(): ExternalItemContext {
        let localContext = new ExternalItemContext(this.context, this.state);
        this.enterRule(localContext, 116, RustParser.RULE_externalItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1083;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1080;
                this.outerAttribute();
                }
                }
                this.state = 1085;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1094;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 1086;
                this.macroInvocationSemi();
                }
                break;
            case RustParser.KW_FN:
            case RustParser.KW_PUB:
            case RustParser.KW_STATIC:
                {
                this.state = 1088;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 1087;
                    this.visibility();
                    }
                }

                this.state = 1092;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_STATIC:
                    {
                    this.state = 1090;
                    this.staticItem();
                    }
                    break;
                case RustParser.KW_FN:
                    {
                    this.state = 1091;
                    this.function_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericParams(): GenericParamsContext {
        let localContext = new GenericParamsContext(this.context, this.state);
        this.enterRule(localContext, 118, RustParser.RULE_genericParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1096;
            this.match(RustParser.LT);
            this.state = 1109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 134217753) !== 0) || _la === 121) {
                {
                this.state = 1102;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1097;
                        this.genericParam();
                        this.state = 1098;
                        this.match(RustParser.COMMA);
                        }
                        }
                    }
                    this.state = 1104;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
                }
                this.state = 1105;
                this.genericParam();
                this.state = 1107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1106;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1111;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericParam(): GenericParamContext {
        let localContext = new GenericParamContext(this.context, this.state);
        this.enterRule(localContext, 120, RustParser.RULE_genericParam);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1116;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1113;
                    this.outerAttribute();
                    }
                    }
                }
                this.state = 1118;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 127, this.context);
            }
            this.state = 1122;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                {
                this.state = 1119;
                this.lifetimeParam();
                }
                break;
            case 2:
                {
                this.state = 1120;
                this.typeParam();
                }
                break;
            case 3:
                {
                this.state = 1121;
                this.constParam();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeParam(): LifetimeParamContext {
        let localContext = new LifetimeParamContext(this.context, this.state);
        this.enterRule(localContext, 122, RustParser.RULE_lifetimeParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 1124;
                this.outerAttribute();
                }
            }

            this.state = 1127;
            this.match(RustParser.LIFETIME_OR_LABEL);
            this.state = 1130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1128;
                this.match(RustParser.COLON);
                this.state = 1129;
                this.lifetimeBounds();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParam(): TypeParamContext {
        let localContext = new TypeParamContext(this.context, this.state);
        this.enterRule(localContext, 124, RustParser.RULE_typeParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 1132;
                this.outerAttribute();
                }
            }

            this.state = 1135;
            this.identifier();
            this.state = 1140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1136;
                this.match(RustParser.COLON);
                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 1057) !== 0)) {
                    {
                    this.state = 1137;
                    this.typeParamBounds();
                    }
                }

                }
            }

            this.state = 1144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 1142;
                this.match(RustParser.EQ);
                this.state = 1143;
                this.type_();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constParam(): ConstParamContext {
        let localContext = new ConstParamContext(this.context, this.state);
        this.enterRule(localContext, 126, RustParser.RULE_constParam);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1146;
            this.match(RustParser.KW_CONST);
            this.state = 1147;
            this.identifier();
            this.state = 1148;
            this.match(RustParser.COLON);
            this.state = 1149;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 128, RustParser.RULE_whereClause);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1151;
            this.match(RustParser.KW_WHERE);
            this.state = 1157;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1152;
                    this.whereClauseItem();
                    this.state = 1153;
                    this.match(RustParser.COMMA);
                    }
                    }
                }
                this.state = 1159;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
            }
            this.state = 1161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11 || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435511) !== 0) || _la === 89 || _la === 128) {
                {
                this.state = 1160;
                this.whereClauseItem();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClauseItem(): WhereClauseItemContext {
        let localContext = new WhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 130, RustParser.RULE_whereClauseItem);
        try {
            this.state = 1165;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.LIFETIME_OR_LABEL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1163;
                this.lifetimeWhereClauseItem();
                }
                break;
            case RustParser.KW_FOR:
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.AND:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1164;
                this.typeBoundWhereClauseItem();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext {
        let localContext = new LifetimeWhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 132, RustParser.RULE_lifetimeWhereClauseItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1167;
            this.lifetime();
            this.state = 1168;
            this.match(RustParser.COLON);
            this.state = 1169;
            this.lifetimeBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext {
        let localContext = new TypeBoundWhereClauseItemContext(this.context, this.state);
        this.enterRule(localContext, 134, RustParser.RULE_typeBoundWhereClauseItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 1171;
                this.forLifetimes();
                }
            }

            this.state = 1174;
            this.type_();
            this.state = 1175;
            this.match(RustParser.COLON);
            this.state = 1177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 318769184) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435519) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 1057) !== 0)) {
                {
                this.state = 1176;
                this.typeParamBounds();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forLifetimes(): ForLifetimesContext {
        let localContext = new ForLifetimesContext(this.context, this.state);
        this.enterRule(localContext, 136, RustParser.RULE_forLifetimes);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1179;
            this.match(RustParser.KW_FOR);
            this.state = 1180;
            this.genericParams();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public associatedItem(): AssociatedItemContext {
        let localContext = new AssociatedItemContext(this.context, this.state);
        this.enterRule(localContext, 138, RustParser.RULE_associatedItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1182;
                this.outerAttribute();
                }
                }
                this.state = 1187;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1197;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                {
                this.state = 1188;
                this.macroInvocationSemi();
                }
                break;
            case RustParser.KW_CONST:
            case RustParser.KW_FN:
            case RustParser.KW_PUB:
            case RustParser.KW_TYPE:
                {
                this.state = 1190;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                    this.state = 1189;
                    this.visibility();
                    }
                }

                this.state = 1195;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_TYPE:
                    {
                    this.state = 1192;
                    this.typeAlias();
                    }
                    break;
                case RustParser.KW_CONST:
                    {
                    this.state = 1193;
                    this.constantItem();
                    }
                    break;
                case RustParser.KW_FN:
                    {
                    this.state = 1194;
                    this.function_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public innerAttribute(): InnerAttributeContext {
        let localContext = new InnerAttributeContext(this.context, this.state);
        this.enterRule(localContext, 140, RustParser.RULE_innerAttribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1199;
            this.match(RustParser.POUND);
            this.state = 1200;
            this.match(RustParser.NOT);
            this.state = 1201;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 1202;
            this.attr();
            this.state = 1203;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public outerAttribute(): OuterAttributeContext {
        let localContext = new OuterAttributeContext(this.context, this.state);
        this.enterRule(localContext, 142, RustParser.RULE_outerAttribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1205;
            this.match(RustParser.POUND);
            this.state = 1206;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 1207;
            this.attr();
            this.state = 1208;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attr(): AttrContext {
        let localContext = new AttrContext(this.context, this.state);
        this.enterRule(localContext, 144, RustParser.RULE_attr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1210;
            this.simplePath();
            this.state = 1212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 88080385) !== 0)) {
                {
                this.state = 1211;
                this.attrInput();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attrInput(): AttrInputContext {
        let localContext = new AttrInputContext(this.context, this.state);
        this.enterRule(localContext, 146, RustParser.RULE_attrInput);
        try {
            this.state = 1217;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1214;
                this.delimTokenTree();
                }
                break;
            case RustParser.EQ:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1215;
                this.match(RustParser.EQ);
                this.state = 1216;
                this.literalExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 148, RustParser.RULE_statement);
        try {
            this.state = 1223;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.SEMI:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1219;
                this.match(RustParser.SEMI);
                }
                break;
            case RustParser.KW_FN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1220;
                this.function_();
                }
                break;
            case RustParser.KW_LET:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1221;
                this.letStatement();
                }
                break;
            case RustParser.KW_BREAK:
            case RustParser.KW_CONTINUE:
            case RustParser.KW_CRATE:
            case RustParser.KW_FALSE:
            case RustParser.KW_FOR:
            case RustParser.KW_IF:
            case RustParser.KW_LOOP:
            case RustParser.KW_MATCH:
            case RustParser.KW_MOVE:
            case RustParser.KW_RETURN:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_TRUE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_WHILE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.MINUS:
            case RustParser.STAR:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.OR:
            case RustParser.OROR:
            case RustParser.LT:
            case RustParser.DOTDOT:
            case RustParser.DOTDOTEQ:
            case RustParser.PATHSEP:
            case RustParser.POUND:
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1222;
                this.expressionStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStatement(): LetStatementContext {
        let localContext = new LetStatementContext(this.context, this.state);
        this.enterRule(localContext, 150, RustParser.RULE_letStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1225;
            this.match(RustParser.KW_LET);
            this.state = 1226;
            this.identifierPattern();
            {
            this.state = 1227;
            this.match(RustParser.COLON);
            this.state = 1228;
            this.type_();
            }
            this.state = 1232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 1230;
                this.match(RustParser.EQ);
                this.state = 1231;
                this.expression(0);
                }
            }

            this.state = 1234;
            this.match(RustParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 152, RustParser.RULE_expressionStatement);
        try {
            this.state = 1243;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1236;
                this.expression(0);
                this.state = 1237;
                this.match(RustParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1239;
                this.expressionWithBlock();
                this.state = 1241;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 148, this.context) ) {
                case 1:
                    {
                    this.state = 1240;
                    this.match(RustParser.SEMI);
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 154;
        this.enterRecursionRule(localContext, 154, RustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1325;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                {
                localContext = new AttributedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1247;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1246;
                        this.outerAttribute();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1249;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 150, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1251;
                this.expression(40);
                }
                break;
            case 2:
                {
                localContext = new LiteralExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1253;
                this.literalExpression();
                }
                break;
            case 3:
                {
                localContext = new PathExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1254;
                this.pathExpression();
                }
                break;
            case 4:
                {
                localContext = new BorrowExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1255;
                this.match(RustParser.AND);
                this.state = 1257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 1256;
                    this.match(RustParser.KW_MUT);
                    }
                }

                this.state = 1259;
                this.expression(30);
                }
                break;
            case 5:
                {
                localContext = new DereferenceExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1260;
                this.match(RustParser.STAR);
                this.state = 1261;
                this.expression(29);
                }
                break;
            case 6:
                {
                localContext = new NegationExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1262;
                _la = this.tokenStream.LA(1);
                if(!(_la === 83 || _la === 88)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1263;
                this.expression(28);
                }
                break;
            case 7:
                {
                localContext = new RangeExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1264;
                this.match(RustParser.DOTDOT);
                this.state = 1266;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
                case 1:
                    {
                    this.state = 1265;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 8:
                {
                localContext = new RangeExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1268;
                this.match(RustParser.DOTDOTEQ);
                this.state = 1269;
                this.expression(15);
                }
                break;
            case 9:
                {
                localContext = new ContinueExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1270;
                this.match(RustParser.KW_CONTINUE);
                this.state = 1272;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
                case 1:
                    {
                    this.state = 1271;
                    this.match(RustParser.LIFETIME_OR_LABEL);
                    }
                    break;
                }
                this.state = 1275;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
                case 1:
                    {
                    this.state = 1274;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 10:
                {
                localContext = new BreakExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1277;
                this.match(RustParser.KW_BREAK);
                this.state = 1279;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context) ) {
                case 1:
                    {
                    this.state = 1278;
                    this.match(RustParser.LIFETIME_OR_LABEL);
                    }
                    break;
                }
                this.state = 1282;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 156, this.context) ) {
                case 1:
                    {
                    this.state = 1281;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 11:
                {
                localContext = new ReturnExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1284;
                this.match(RustParser.KW_RETURN);
                this.state = 1286;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
                case 1:
                    {
                    this.state = 1285;
                    this.expression(0);
                    }
                    break;
                }
                }
                break;
            case 12:
                {
                localContext = new GroupedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1288;
                this.match(RustParser.LPAREN);
                this.state = 1292;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1289;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1294;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                }
                this.state = 1295;
                this.expression(0);
                this.state = 1296;
                this.match(RustParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new ArrayExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1298;
                this.match(RustParser.LSQUAREBRACKET);
                this.state = 1302;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1299;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1304;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
                }
                this.state = 1306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                    {
                    this.state = 1305;
                    this.arrayElements();
                    }
                }

                this.state = 1308;
                this.match(RustParser.RSQUAREBRACKET);
                }
                break;
            case 14:
                {
                localContext = new TupleExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1309;
                this.match(RustParser.LPAREN);
                this.state = 1313;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1310;
                        this.innerAttribute();
                        }
                        }
                    }
                    this.state = 1315;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                }
                this.state = 1317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                    {
                    this.state = 1316;
                    this.tupleElements();
                    }
                }

                this.state = 1319;
                this.match(RustParser.RPAREN);
                }
                break;
            case 15:
                {
                localContext = new StructExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1320;
                this.structExpression();
                }
                break;
            case 16:
                {
                localContext = new EnumerationVariantExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1321;
                this.enumerationVariantExpression();
                }
                break;
            case 17:
                {
                localContext = new ClosureExpression_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1322;
                this.closureExpression();
                }
                break;
            case 18:
                {
                localContext = new ExpressionWithBlock_Context(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1323;
                this.expressionWithBlock();
                }
                break;
            case 19:
                {
                localContext = new MacroInvocationAsExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1324;
                this.macroInvocation();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1411;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 169, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1409;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1327;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 1328;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1329;
                        this.expression(27);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1330;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1331;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 82 || _la === 83)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1332;
                        this.expression(26);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1333;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1336;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case RustParser.LT:
                            {
                            this.state = 1334;
                            this.shl();
                            }
                            break;
                        case RustParser.GT:
                            {
                            this.state = 1335;
                            this.shr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1338;
                        this.expression(25);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1340;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1341;
                        this.match(RustParser.AND);
                        this.state = 1342;
                        this.expression(24);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1343;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 1344;
                        this.match(RustParser.CARET);
                        this.state = 1345;
                        this.expression(23);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ArithmeticOrLogicalExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1346;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1347;
                        this.match(RustParser.OR);
                        this.state = 1348;
                        this.expression(22);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ComparisonExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1349;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 1350;
                        this.comparisonOperator();
                        this.state = 1351;
                        this.expression(21);
                        }
                        break;
                    case 8:
                        {
                        localContext = new LazyBooleanExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1353;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1354;
                        this.match(RustParser.AND);
                        this.state = 1355;
                        this.match(RustParser.AND);
                        this.state = 1356;
                        this.expression(20);
                        }
                        break;
                    case 9:
                        {
                        localContext = new LazyBooleanExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1357;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1358;
                        this.match(RustParser.OROR);
                        this.state = 1359;
                        this.expression(19);
                        }
                        break;
                    case 10:
                        {
                        localContext = new RangeExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1360;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1361;
                        this.match(RustParser.DOTDOTEQ);
                        this.state = 1362;
                        this.expression(15);
                        }
                        break;
                    case 11:
                        {
                        localContext = new AssignmentExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1363;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1364;
                        this.match(RustParser.EQ);
                        this.state = 1365;
                        this.expression(14);
                        }
                        break;
                    case 12:
                        {
                        localContext = new CompoundAssignmentExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1366;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1367;
                        this.compoundAssignOperator();
                        this.state = 1368;
                        this.expression(13);
                        }
                        break;
                    case 13:
                        {
                        localContext = new MethodCallExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1370;
                        if (!(this.precpred(this.context, 37))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 37)");
                        }
                        this.state = 1371;
                        this.match(RustParser.DOT);
                        this.state = 1372;
                        this.pathExprSegment();
                        this.state = 1373;
                        this.match(RustParser.LPAREN);
                        this.state = 1375;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                            {
                            this.state = 1374;
                            this.callParams();
                            }
                        }

                        this.state = 1377;
                        this.match(RustParser.RPAREN);
                        }
                        break;
                    case 14:
                        {
                        localContext = new FieldExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1379;
                        if (!(this.precpred(this.context, 36))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 36)");
                        }
                        this.state = 1380;
                        this.match(RustParser.DOT);
                        this.state = 1381;
                        this.identifier();
                        }
                        break;
                    case 15:
                        {
                        localContext = new TupleIndexingExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1382;
                        if (!(this.precpred(this.context, 35))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 35)");
                        }
                        this.state = 1383;
                        this.match(RustParser.DOT);
                        this.state = 1384;
                        this.tupleIndex();
                        }
                        break;
                    case 16:
                        {
                        localContext = new AwaitExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1385;
                        if (!(this.precpred(this.context, 34))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 34)");
                        }
                        this.state = 1386;
                        this.match(RustParser.DOT);
                        this.state = 1387;
                        this.match(RustParser.KW_AWAIT);
                        }
                        break;
                    case 17:
                        {
                        localContext = new CallExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1388;
                        if (!(this.precpred(this.context, 33))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 33)");
                        }
                        this.state = 1389;
                        this.match(RustParser.LPAREN);
                        this.state = 1391;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                            {
                            this.state = 1390;
                            this.callParams();
                            }
                        }

                        this.state = 1393;
                        this.match(RustParser.RPAREN);
                        }
                        break;
                    case 18:
                        {
                        localContext = new IndexExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1394;
                        if (!(this.precpred(this.context, 32))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 32)");
                        }
                        this.state = 1395;
                        this.match(RustParser.LSQUAREBRACKET);
                        this.state = 1396;
                        this.expression(0);
                        this.state = 1397;
                        this.match(RustParser.RSQUAREBRACKET);
                        }
                        break;
                    case 19:
                        {
                        localContext = new ErrorPropagationExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1399;
                        if (!(this.precpred(this.context, 31))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 31)");
                        }
                        this.state = 1400;
                        this.match(RustParser.QUESTION);
                        }
                        break;
                    case 20:
                        {
                        localContext = new TypeCastExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1401;
                        if (!(this.precpred(this.context, 27))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 27)");
                        }
                        this.state = 1402;
                        this.match(RustParser.KW_AS);
                        this.state = 1403;
                        this.typeNoBounds();
                        }
                        break;
                    case 21:
                        {
                        localContext = new RangeExpressionContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, RustParser.RULE_expression);
                        this.state = 1404;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1405;
                        this.match(RustParser.DOTDOT);
                        this.state = 1407;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
                        case 1:
                            {
                            this.state = 1406;
                            this.expression(0);
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1413;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 169, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 156, RustParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1414;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compoundAssignOperator(): CompoundAssignOperatorContext {
        let localContext = new CompoundAssignOperatorContext(this.context, this.state);
        this.enterRule(localContext, 158, RustParser.RULE_compoundAssignOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1416;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1023) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        let localContext = new ExpressionWithBlockContext(this.context, this.state);
        this.enterRule(localContext, 160, RustParser.RULE_expressionWithBlock);
        try {
            let alternative: number;
            this.state = 1432;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1419;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1418;
                        this.outerAttribute();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1421;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 170, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1423;
                this.expressionWithBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1425;
                this.blockExpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1426;
                this.asyncBlockExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1427;
                this.unsafeBlockExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1428;
                this.loopExpression();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1429;
                this.ifExpression();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1430;
                this.ifLetExpression();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1431;
                this.matchExpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalExpression(): LiteralExpressionContext {
        let localContext = new LiteralExpressionContext(this.context, this.state);
        this.enterRule(localContext, 162, RustParser.RULE_literalExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1434;
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 30 || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2175) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathExpression(): PathExpressionContext {
        let localContext = new PathExpressionContext(this.context, this.state);
        this.enterRule(localContext, 164, RustParser.RULE_pathExpression);
        try {
            this.state = 1438;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1436;
                this.pathInExpression();
                }
                break;
            case RustParser.LT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1437;
                this.qualifiedPathInExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockExpression(): BlockExpressionContext {
        let localContext = new BlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 166, RustParser.RULE_blockExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1440;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1442;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401658932) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5543233) !== 0)) {
                {
                this.state = 1441;
                this.statements();
                }
            }

            this.state = 1444;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statements(): StatementsContext {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 168, RustParser.RULE_statements);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1455;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1447;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1446;
                        this.statement();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1449;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1452;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                    {
                    this.state = 1451;
                    this.expression(0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1454;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public asyncBlockExpression(): AsyncBlockExpressionContext {
        let localContext = new AsyncBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 170, RustParser.RULE_asyncBlockExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1457;
            this.match(RustParser.KW_ASYNC);
            this.state = 1459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 1458;
                this.match(RustParser.KW_MOVE);
                }
            }

            this.state = 1461;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unsafeBlockExpression(): UnsafeBlockExpressionContext {
        let localContext = new UnsafeBlockExpressionContext(this.context, this.state);
        this.enterRule(localContext, 172, RustParser.RULE_unsafeBlockExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1463;
            this.match(RustParser.KW_UNSAFE);
            this.state = 1464;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayElements(): ArrayElementsContext {
        let localContext = new ArrayElementsContext(this.context, this.state);
        this.enterRule(localContext, 174, RustParser.RULE_arrayElements);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1481;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1466;
                this.expression(0);
                this.state = 1471;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1467;
                        this.match(RustParser.COMMA);
                        this.state = 1468;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1473;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                }
                this.state = 1475;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1474;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1477;
                this.expression(0);
                this.state = 1478;
                this.match(RustParser.SEMI);
                this.state = 1479;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleElements(): TupleElementsContext {
        let localContext = new TupleElementsContext(this.context, this.state);
        this.enterRule(localContext, 176, RustParser.RULE_tupleElements);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1486;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1483;
                    this.expression(0);
                    this.state = 1484;
                    this.match(RustParser.COMMA);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1488;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 181, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1491;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                {
                this.state = 1490;
                this.expression(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleIndex(): TupleIndexContext {
        let localContext = new TupleIndexContext(this.context, this.state);
        this.enterRule(localContext, 178, RustParser.RULE_tupleIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.match(RustParser.INTEGER_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExpression(): StructExpressionContext {
        let localContext = new StructExpressionContext(this.context, this.state);
        this.enterRule(localContext, 180, RustParser.RULE_structExpression);
        try {
            this.state = 1498;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1495;
                this.structExprStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1496;
                this.structExprTuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1497;
                this.structExprUnit();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprStruct(): StructExprStructContext {
        let localContext = new StructExprStructContext(this.context, this.state);
        this.enterRule(localContext, 182, RustParser.RULE_structExprStruct);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1500;
            this.pathInExpression();
            this.state = 1501;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1505;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1502;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1507;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
            }
            this.state = 1510;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.INTEGER_LITERAL:
            case RustParser.POUND:
                {
                this.state = 1508;
                this.structExprFields();
                }
                break;
            case RustParser.DOTDOT:
                {
                this.state = 1509;
                this.structBase();
                }
                break;
            case RustParser.RCURLYBRACE:
                break;
            default:
                break;
            }
            this.state = 1512;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprFields(): StructExprFieldsContext {
        let localContext = new StructExprFieldsContext(this.context, this.state);
        this.enterRule(localContext, 184, RustParser.RULE_structExprFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1514;
            this.structExprField();
            this.state = 1519;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1515;
                    this.match(RustParser.COMMA);
                    this.state = 1516;
                    this.structExprField();
                    }
                    }
                }
                this.state = 1521;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
            }
            this.state = 1527;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context) ) {
            case 1:
                {
                this.state = 1522;
                this.match(RustParser.COMMA);
                this.state = 1523;
                this.structBase();
                }
                break;
            case 2:
                {
                this.state = 1525;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1524;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprField(): StructExprFieldContext {
        let localContext = new StructExprFieldContext(this.context, this.state);
        this.enterRule(localContext, 186, RustParser.RULE_structExprField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1532;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1529;
                this.outerAttribute();
                }
                }
                this.state = 1534;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1543;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
            case 1:
                {
                this.state = 1535;
                this.identifier();
                }
                break;
            case 2:
                {
                this.state = 1538;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 1536;
                    this.identifier();
                    }
                    break;
                case RustParser.INTEGER_LITERAL:
                    {
                    this.state = 1537;
                    this.tupleIndex();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1540;
                this.match(RustParser.COLON);
                this.state = 1541;
                this.expression(0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structBase(): StructBaseContext {
        let localContext = new StructBaseContext(this.context, this.state);
        this.enterRule(localContext, 188, RustParser.RULE_structBase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1545;
            this.match(RustParser.DOTDOT);
            this.state = 1546;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprTuple(): StructExprTupleContext {
        let localContext = new StructExprTupleContext(this.context, this.state);
        this.enterRule(localContext, 190, RustParser.RULE_structExprTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1548;
            this.pathInExpression();
            this.state = 1549;
            this.match(RustParser.LPAREN);
            this.state = 1553;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1550;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1555;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
            }
            this.state = 1567;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                {
                this.state = 1556;
                this.expression(0);
                this.state = 1561;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1557;
                        this.match(RustParser.COMMA);
                        this.state = 1558;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1563;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
                }
                this.state = 1565;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1564;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1569;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structExprUnit(): StructExprUnitContext {
        let localContext = new StructExprUnitContext(this.context, this.state);
        this.enterRule(localContext, 192, RustParser.RULE_structExprUnit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1571;
            this.pathInExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumerationVariantExpression(): EnumerationVariantExpressionContext {
        let localContext = new EnumerationVariantExpressionContext(this.context, this.state);
        this.enterRule(localContext, 194, RustParser.RULE_enumerationVariantExpression);
        try {
            this.state = 1576;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1573;
                this.enumExprStruct();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1574;
                this.enumExprTuple();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1575;
                this.enumExprFieldless();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprStruct(): EnumExprStructContext {
        let localContext = new EnumExprStructContext(this.context, this.state);
        this.enterRule(localContext, 196, RustParser.RULE_enumExprStruct);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1578;
            this.pathInExpression();
            this.state = 1579;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1581;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 2097177) !== 0)) {
                {
                this.state = 1580;
                this.enumExprFields();
                }
            }

            this.state = 1583;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprFields(): EnumExprFieldsContext {
        let localContext = new EnumExprFieldsContext(this.context, this.state);
        this.enterRule(localContext, 198, RustParser.RULE_enumExprFields);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1585;
            this.enumExprField();
            this.state = 1590;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1586;
                    this.match(RustParser.COMMA);
                    this.state = 1587;
                    this.enumExprField();
                    }
                    }
                }
                this.state = 1592;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
            }
            this.state = 1594;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1593;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprField(): EnumExprFieldContext {
        let localContext = new EnumExprFieldContext(this.context, this.state);
        this.enterRule(localContext, 200, RustParser.RULE_enumExprField);
        try {
            this.state = 1604;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 201, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1596;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1599;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 1597;
                    this.identifier();
                    }
                    break;
                case RustParser.INTEGER_LITERAL:
                    {
                    this.state = 1598;
                    this.tupleIndex();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1601;
                this.match(RustParser.COLON);
                this.state = 1602;
                this.expression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprTuple(): EnumExprTupleContext {
        let localContext = new EnumExprTupleContext(this.context, this.state);
        this.enterRule(localContext, 202, RustParser.RULE_enumExprTuple);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1606;
            this.pathInExpression();
            this.state = 1607;
            this.match(RustParser.LPAREN);
            this.state = 1619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1401625140) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 121634841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 7919743) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 5542209) !== 0)) {
                {
                this.state = 1608;
                this.expression(0);
                this.state = 1613;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 202, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1609;
                        this.match(RustParser.COMMA);
                        this.state = 1610;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1615;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 202, this.context);
                }
                this.state = 1617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1616;
                    this.match(RustParser.COMMA);
                    }
                }

                }
            }

            this.state = 1621;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumExprFieldless(): EnumExprFieldlessContext {
        let localContext = new EnumExprFieldlessContext(this.context, this.state);
        this.enterRule(localContext, 204, RustParser.RULE_enumExprFieldless);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1623;
            this.pathInExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callParams(): CallParamsContext {
        let localContext = new CallParamsContext(this.context, this.state);
        this.enterRule(localContext, 206, RustParser.RULE_callParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1625;
            this.expression(0);
            this.state = 1630;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1626;
                    this.match(RustParser.COMMA);
                    this.state = 1627;
                    this.expression(0);
                    }
                    }
                }
                this.state = 1632;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
            }
            this.state = 1634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1633;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureExpression(): ClosureExpressionContext {
        let localContext = new ClosureExpressionContext(this.context, this.state);
        this.enterRule(localContext, 208, RustParser.RULE_closureExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1637;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 1636;
                this.match(RustParser.KW_MOVE);
                }
            }

            this.state = 1645;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.OROR:
                {
                this.state = 1639;
                this.match(RustParser.OROR);
                }
                break;
            case RustParser.OR:
                {
                this.state = 1640;
                this.match(RustParser.OR);
                this.state = 1642;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
                case 1:
                    {
                    this.state = 1641;
                    this.closureParameters();
                    }
                    break;
                }
                this.state = 1644;
                this.match(RustParser.OR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1652;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_BREAK:
            case RustParser.KW_CONTINUE:
            case RustParser.KW_CRATE:
            case RustParser.KW_FALSE:
            case RustParser.KW_FOR:
            case RustParser.KW_IF:
            case RustParser.KW_LOOP:
            case RustParser.KW_MATCH:
            case RustParser.KW_MOVE:
            case RustParser.KW_RETURN:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_TRUE:
            case RustParser.KW_UNSAFE:
            case RustParser.KW_WHILE:
            case RustParser.KW_ASYNC:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.LIFETIME_OR_LABEL:
            case RustParser.MINUS:
            case RustParser.STAR:
            case RustParser.NOT:
            case RustParser.AND:
            case RustParser.OR:
            case RustParser.OROR:
            case RustParser.LT:
            case RustParser.DOTDOT:
            case RustParser.DOTDOTEQ:
            case RustParser.PATHSEP:
            case RustParser.POUND:
            case RustParser.LCURLYBRACE:
            case RustParser.LSQUAREBRACKET:
            case RustParser.LPAREN:
                {
                this.state = 1647;
                this.expression(0);
                }
                break;
            case RustParser.RARROW:
                {
                this.state = 1648;
                this.match(RustParser.RARROW);
                this.state = 1649;
                this.typeNoBounds();
                this.state = 1650;
                this.blockExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureParameters(): ClosureParametersContext {
        let localContext = new ClosureParametersContext(this.context, this.state);
        this.enterRule(localContext, 210, RustParser.RULE_closureParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1654;
            this.closureParam();
            this.state = 1659;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1655;
                    this.match(RustParser.COMMA);
                    this.state = 1656;
                    this.closureParam();
                    }
                    }
                }
                this.state = 1661;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
            }
            this.state = 1663;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1662;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closureParam(): ClosureParamContext {
        let localContext = new ClosureParamContext(this.context, this.state);
        this.enterRule(localContext, 212, RustParser.RULE_closureParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1665;
                this.outerAttribute();
                }
                }
                this.state = 1670;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1671;
            this.pattern();
            this.state = 1674;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1672;
                this.match(RustParser.COLON);
                this.state = 1673;
                this.type_();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopExpression(): LoopExpressionContext {
        let localContext = new LoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 214, RustParser.RULE_loopExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81) {
                {
                this.state = 1676;
                this.loopLabel();
                }
            }

            this.state = 1683;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
            case 1:
                {
                this.state = 1679;
                this.infiniteLoopExpression();
                }
                break;
            case 2:
                {
                this.state = 1680;
                this.predicateLoopExpression();
                }
                break;
            case 3:
                {
                this.state = 1681;
                this.predicatePatternLoopExpression();
                }
                break;
            case 4:
                {
                this.state = 1682;
                this.iteratorLoopExpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infiniteLoopExpression(): InfiniteLoopExpressionContext {
        let localContext = new InfiniteLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 216, RustParser.RULE_infiniteLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1685;
            this.match(RustParser.KW_LOOP);
            this.state = 1686;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext {
        let localContext = new PredicateLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 218, RustParser.RULE_predicateLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1688;
            this.match(RustParser.KW_WHILE);
            this.state = 1689;
            this.expression(0);
            this.state = 1690;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext {
        let localContext = new PredicatePatternLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 220, RustParser.RULE_predicatePatternLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1692;
            this.match(RustParser.KW_WHILE);
            this.state = 1693;
            this.match(RustParser.KW_LET);
            this.state = 1694;
            this.pattern();
            this.state = 1695;
            this.match(RustParser.EQ);
            this.state = 1696;
            this.expression(0);
            this.state = 1697;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public iteratorLoopExpression(): IteratorLoopExpressionContext {
        let localContext = new IteratorLoopExpressionContext(this.context, this.state);
        this.enterRule(localContext, 222, RustParser.RULE_iteratorLoopExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1699;
            this.match(RustParser.KW_FOR);
            this.state = 1700;
            this.pattern();
            this.state = 1701;
            this.match(RustParser.KW_IN);
            this.state = 1702;
            this.expression(0);
            this.state = 1703;
            this.blockExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopLabel(): LoopLabelContext {
        let localContext = new LoopLabelContext(this.context, this.state);
        this.enterRule(localContext, 224, RustParser.RULE_loopLabel);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1705;
            this.match(RustParser.LIFETIME_OR_LABEL);
            this.state = 1706;
            this.match(RustParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExpression(): IfExpressionContext {
        let localContext = new IfExpressionContext(this.context, this.state);
        this.enterRule(localContext, 226, RustParser.RULE_ifExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1708;
            this.match(RustParser.KW_IF);
            this.state = 1709;
            this.expression(0);
            this.state = 1710;
            this.blockExpression();
            this.state = 1716;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
            case 1:
                {
                this.state = 1711;
                this.match(RustParser.KW_ELSE);
                this.state = 1714;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.LCURLYBRACE:
                    {
                    this.state = 1712;
                    this.blockExpression();
                    }
                    break;
                case RustParser.KW_IF:
                    {
                    this.state = 1713;
                    this.ifExpression();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifLetExpression(): IfLetExpressionContext {
        let localContext = new IfLetExpressionContext(this.context, this.state);
        this.enterRule(localContext, 228, RustParser.RULE_ifLetExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1718;
            this.match(RustParser.KW_IF);
            this.state = 1719;
            this.match(RustParser.KW_LET);
            this.state = 1720;
            this.pattern();
            this.state = 1721;
            this.match(RustParser.EQ);
            this.state = 1722;
            this.expression(0);
            this.state = 1723;
            this.blockExpression();
            this.state = 1730;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
            case 1:
                {
                this.state = 1724;
                this.match(RustParser.KW_ELSE);
                this.state = 1728;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
                case 1:
                    {
                    this.state = 1725;
                    this.blockExpression();
                    }
                    break;
                case 2:
                    {
                    this.state = 1726;
                    this.ifExpression();
                    }
                    break;
                case 3:
                    {
                    this.state = 1727;
                    this.ifLetExpression();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchExpression(): MatchExpressionContext {
        let localContext = new MatchExpressionContext(this.context, this.state);
        this.enterRule(localContext, 230, RustParser.RULE_matchExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1732;
            this.match(RustParser.KW_MATCH);
            this.state = 1733;
            this.expression(0);
            this.state = 1734;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1738;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1735;
                    this.innerAttribute();
                    }
                    }
                }
                this.state = 1740;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 221, this.context);
            }
            this.state = 1742;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 2421227521) !== 0) || _la === 126 || _la === 128) {
                {
                this.state = 1741;
                this.matchArms();
                }
            }

            this.state = 1744;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArms(): MatchArmsContext {
        let localContext = new MatchArmsContext(this.context, this.state);
        this.enterRule(localContext, 232, RustParser.RULE_matchArms);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1752;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 223, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1746;
                    this.matchArm();
                    this.state = 1747;
                    this.match(RustParser.FATARROW);
                    this.state = 1748;
                    this.matchArmExpression();
                    }
                    }
                }
                this.state = 1754;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 223, this.context);
            }
            this.state = 1755;
            this.matchArm();
            this.state = 1756;
            this.match(RustParser.FATARROW);
            this.state = 1757;
            this.expression(0);
            this.state = 1759;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1758;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArmExpression(): MatchArmExpressionContext {
        let localContext = new MatchArmExpressionContext(this.context, this.state);
        this.enterRule(localContext, 234, RustParser.RULE_matchArmExpression);
        let _la: number;
        try {
            this.state = 1768;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 226, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1761;
                this.expression(0);
                this.state = 1762;
                this.match(RustParser.COMMA);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1764;
                this.expressionWithBlock();
                this.state = 1766;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1765;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArm(): MatchArmContext {
        let localContext = new MatchArmContext(this.context, this.state);
        this.enterRule(localContext, 236, RustParser.RULE_matchArm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1773;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1770;
                this.outerAttribute();
                }
                }
                this.state = 1775;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1776;
            this.pattern();
            this.state = 1778;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 1777;
                this.matchArmGuard();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchArmGuard(): MatchArmGuardContext {
        let localContext = new MatchArmGuardContext(this.context, this.state);
        this.enterRule(localContext, 238, RustParser.RULE_matchArmGuard);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1780;
            this.match(RustParser.KW_IF);
            this.state = 1781;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pattern(): PatternContext {
        let localContext = new PatternContext(this.context, this.state);
        this.enterRule(localContext, 240, RustParser.RULE_pattern);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1784;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 90) {
                {
                this.state = 1783;
                this.match(RustParser.OR);
                }
            }

            this.state = 1786;
            this.patternNoTopAlt();
            this.state = 1791;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1787;
                    this.match(RustParser.OR);
                    this.state = 1788;
                    this.patternNoTopAlt();
                    }
                    }
                }
                this.state = 1793;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternNoTopAlt(): PatternNoTopAltContext {
        let localContext = new PatternNoTopAltContext(this.context, this.state);
        this.enterRule(localContext, 242, RustParser.RULE_patternNoTopAlt);
        try {
            this.state = 1796;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1794;
                this.patternWithoutRange();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1795;
                this.rangePattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public patternWithoutRange(): PatternWithoutRangeContext {
        let localContext = new PatternWithoutRangeContext(this.context, this.state);
        this.enterRule(localContext, 244, RustParser.RULE_patternWithoutRange);
        try {
            this.state = 1809;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1798;
                this.literalPattern();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1799;
                this.identifierPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1800;
                this.wildcardPattern();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1801;
                this.restPattern();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1802;
                this.structPattern();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1803;
                this.tupleStructPattern();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1804;
                this.tuplePattern();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1805;
                this.groupedPattern();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1806;
                this.slicePattern();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1807;
                this.pathPattern();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1808;
                this.macroInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalPattern(): LiteralPatternContext {
        let localContext = new LiteralPatternContext(this.context, this.state);
        this.enterRule(localContext, 246, RustParser.RULE_literalPattern);
        let _la: number;
        try {
            this.state = 1827;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1811;
                this.match(RustParser.KW_TRUE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1812;
                this.match(RustParser.KW_FALSE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1813;
                this.match(RustParser.CHAR_LITERAL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1814;
                this.match(RustParser.BYTE_LITERAL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1815;
                this.match(RustParser.STRING_LITERAL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1816;
                this.match(RustParser.RAW_STRING_LITERAL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1817;
                this.match(RustParser.BYTE_STRING_LITERAL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1818;
                this.match(RustParser.RAW_BYTE_STRING_LITERAL);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1820;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1819;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1822;
                this.match(RustParser.INTEGER_LITERAL);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1824;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1823;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1826;
                this.match(RustParser.FLOAT_LITERAL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierPattern(): IdentifierPatternContext {
        let localContext = new IdentifierPatternContext(this.context, this.state);
        this.enterRule(localContext, 248, RustParser.RULE_identifierPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1830;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 1829;
                this.match(RustParser.KW_REF);
                }
            }

            this.state = 1833;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 1832;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 1835;
            this.identifier();
            this.state = 1838;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 1836;
                this.match(RustParser.AT);
                this.state = 1837;
                this.pattern();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public wildcardPattern(): WildcardPatternContext {
        let localContext = new WildcardPatternContext(this.context, this.state);
        this.enterRule(localContext, 250, RustParser.RULE_wildcardPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1840;
            this.match(RustParser.UNDERSCORE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public restPattern(): RestPatternContext {
        let localContext = new RestPatternContext(this.context, this.state);
        this.enterRule(localContext, 252, RustParser.RULE_restPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1842;
            this.match(RustParser.DOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangePattern(): RangePatternContext {
        let localContext = new RangePatternContext(this.context, this.state);
        this.enterRule(localContext, 254, RustParser.RULE_rangePattern);
        try {
            this.state = 1855;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
            case 1:
                localContext = new InclusiveRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1844;
                this.rangePatternBound();
                this.state = 1845;
                this.match(RustParser.DOTDOTEQ);
                this.state = 1846;
                this.rangePatternBound();
                }
                break;
            case 2:
                localContext = new HalfOpenRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1848;
                this.rangePatternBound();
                this.state = 1849;
                this.match(RustParser.DOTDOT);
                }
                break;
            case 3:
                localContext = new ObsoleteRangePatternContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1851;
                this.rangePatternBound();
                this.state = 1852;
                this.match(RustParser.DOTDOTDOT);
                this.state = 1853;
                this.rangePatternBound();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangePatternBound(): RangePatternBoundContext {
        let localContext = new RangePatternBoundContext(this.context, this.state);
        this.enterRule(localContext, 256, RustParser.RULE_rangePatternBound);
        let _la: number;
        try {
            this.state = 1868;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1857;
                this.match(RustParser.CHAR_LITERAL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1858;
                this.match(RustParser.BYTE_LITERAL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1860;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1859;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1862;
                this.match(RustParser.INTEGER_LITERAL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1864;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 1863;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 1866;
                this.match(RustParser.FLOAT_LITERAL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1867;
                this.pathPattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPattern(): StructPatternContext {
        let localContext = new StructPatternContext(this.context, this.state);
        this.enterRule(localContext, 258, RustParser.RULE_structPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1870;
            this.pathInExpression();
            this.state = 1871;
            this.match(RustParser.LCURLYBRACE);
            this.state = 1873;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20 || _la === 22 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 2097177) !== 0) || _la === 112 || _la === 121) {
                {
                this.state = 1872;
                this.structPatternElements();
                }
            }

            this.state = 1875;
            this.match(RustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternElements(): StructPatternElementsContext {
        let localContext = new StructPatternElementsContext(this.context, this.state);
        this.enterRule(localContext, 260, RustParser.RULE_structPatternElements);
        let _la: number;
        try {
            this.state = 1885;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 246, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1877;
                this.structPatternFields();
                this.state = 1882;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1878;
                    this.match(RustParser.COMMA);
                    this.state = 1880;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 112 || _la === 121) {
                        {
                        this.state = 1879;
                        this.structPatternEtCetera();
                        }
                    }

                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1884;
                this.structPatternEtCetera();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternFields(): StructPatternFieldsContext {
        let localContext = new StructPatternFieldsContext(this.context, this.state);
        this.enterRule(localContext, 262, RustParser.RULE_structPatternFields);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1887;
            this.structPatternField();
            this.state = 1892;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 247, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1888;
                    this.match(RustParser.COMMA);
                    this.state = 1889;
                    this.structPatternField();
                    }
                    }
                }
                this.state = 1894;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 247, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternField(): StructPatternFieldContext {
        let localContext = new StructPatternFieldContext(this.context, this.state);
        this.enterRule(localContext, 264, RustParser.RULE_structPatternField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1898;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1895;
                this.outerAttribute();
                }
                }
                this.state = 1900;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1916;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
            case 1:
                {
                this.state = 1901;
                this.tupleIndex();
                this.state = 1902;
                this.match(RustParser.COLON);
                this.state = 1903;
                this.pattern();
                }
                break;
            case 2:
                {
                this.state = 1905;
                this.identifier();
                this.state = 1906;
                this.match(RustParser.COLON);
                this.state = 1907;
                this.pattern();
                }
                break;
            case 3:
                {
                this.state = 1910;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 1909;
                    this.match(RustParser.KW_REF);
                    }
                }

                this.state = 1913;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 1912;
                    this.match(RustParser.KW_MUT);
                    }
                }

                this.state = 1915;
                this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structPatternEtCetera(): StructPatternEtCeteraContext {
        let localContext = new StructPatternEtCeteraContext(this.context, this.state);
        this.enterRule(localContext, 266, RustParser.RULE_structPatternEtCetera);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1921;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 1918;
                this.outerAttribute();
                }
                }
                this.state = 1923;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1924;
            this.match(RustParser.DOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStructPattern(): TupleStructPatternContext {
        let localContext = new TupleStructPatternContext(this.context, this.state);
        this.enterRule(localContext, 268, RustParser.RULE_tupleStructPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1926;
            this.pathInExpression();
            this.state = 1927;
            this.match(RustParser.LPAREN);
            this.state = 1929;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 273743873) !== 0) || _la === 126 || _la === 128) {
                {
                this.state = 1928;
                this.tupleStructItems();
                }
            }

            this.state = 1931;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleStructItems(): TupleStructItemsContext {
        let localContext = new TupleStructItemsContext(this.context, this.state);
        this.enterRule(localContext, 270, RustParser.RULE_tupleStructItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1933;
            this.pattern();
            this.state = 1938;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 254, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1934;
                    this.match(RustParser.COMMA);
                    this.state = 1935;
                    this.pattern();
                    }
                    }
                }
                this.state = 1940;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 254, this.context);
            }
            this.state = 1942;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1941;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tuplePattern(): TuplePatternContext {
        let localContext = new TuplePatternContext(this.context, this.state);
        this.enterRule(localContext, 272, RustParser.RULE_tuplePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1944;
            this.match(RustParser.LPAREN);
            this.state = 1946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 273743873) !== 0) || _la === 126 || _la === 128) {
                {
                this.state = 1945;
                this.tuplePatternItems();
                }
            }

            this.state = 1948;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tuplePatternItems(): TuplePatternItemsContext {
        let localContext = new TuplePatternItemsContext(this.context, this.state);
        this.enterRule(localContext, 274, RustParser.RULE_tuplePatternItems);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1964;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 259, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1950;
                this.pattern();
                this.state = 1951;
                this.match(RustParser.COMMA);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1953;
                this.restPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1954;
                this.pattern();
                this.state = 1957;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1955;
                        this.match(RustParser.COMMA);
                        this.state = 1956;
                        this.pattern();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1959;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 257, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1962;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1961;
                    this.match(RustParser.COMMA);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupedPattern(): GroupedPatternContext {
        let localContext = new GroupedPatternContext(this.context, this.state);
        this.enterRule(localContext, 276, RustParser.RULE_groupedPattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1966;
            this.match(RustParser.LPAREN);
            this.state = 1967;
            this.pattern();
            this.state = 1968;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public slicePattern(): SlicePatternContext {
        let localContext = new SlicePatternContext(this.context, this.state);
        this.enterRule(localContext, 278, RustParser.RULE_slicePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1970;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 1972;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1397752352) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 608141341) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 273743873) !== 0) || _la === 126 || _la === 128) {
                {
                this.state = 1971;
                this.slicePatternItems();
                }
            }

            this.state = 1974;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public slicePatternItems(): SlicePatternItemsContext {
        let localContext = new SlicePatternItemsContext(this.context, this.state);
        this.enterRule(localContext, 280, RustParser.RULE_slicePatternItems);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1976;
            this.pattern();
            this.state = 1981;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1977;
                    this.match(RustParser.COMMA);
                    this.state = 1978;
                    this.pattern();
                    }
                    }
                }
                this.state = 1983;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
            }
            this.state = 1985;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 1984;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathPattern(): PathPatternContext {
        let localContext = new PathPatternContext(this.context, this.state);
        this.enterRule(localContext, 282, RustParser.RULE_pathPattern);
        try {
            this.state = 1989;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1987;
                this.pathInExpression();
                }
                break;
            case RustParser.LT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1988;
                this.qualifiedPathInExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): Type_Context {
        let localContext = new Type_Context(this.context, this.state);
        this.enterRule(localContext, 284, RustParser.RULE_type_);
        try {
            this.state = 1994;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1991;
                this.identifier();
                }
                break;
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1992;
                this.unit_type();
                }
                break;
            case RustParser.AND:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1993;
                this.referenceType();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unit_type(): Unit_typeContext {
        let localContext = new Unit_typeContext(this.context, this.state);
        this.enterRule(localContext, 286, RustParser.RULE_unit_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1996;
            this.match(RustParser.LPAREN);
            this.state = 2000;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 67) {
                {
                {
                this.state = 1997;
                this.match(RustParser.WHITESPACE);
                }
                }
                this.state = 2002;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2003;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        let localContext = new TypeNoBoundsContext(this.context, this.state);
        this.enterRule(localContext, 288, RustParser.RULE_typeNoBounds);
        try {
            this.state = 2019;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2005;
                this.parenthesizedType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2006;
                this.implTraitTypeOneBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2007;
                this.traitObjectTypeOneBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2008;
                this.typePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2009;
                this.tupleType();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2010;
                this.neverType();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2011;
                this.rawPointerType();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2012;
                this.referenceType();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2013;
                this.arrayType();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2014;
                this.sliceType();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2015;
                this.inferredType();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2016;
                this.qualifiedPathInType();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2017;
                this.bareFunctionType();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2018;
                this.macroInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parenthesizedType(): ParenthesizedTypeContext {
        let localContext = new ParenthesizedTypeContext(this.context, this.state);
        this.enterRule(localContext, 290, RustParser.RULE_parenthesizedType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2021;
            this.match(RustParser.LPAREN);
            this.state = 2022;
            this.type_();
            this.state = 2023;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public neverType(): NeverTypeContext {
        let localContext = new NeverTypeContext(this.context, this.state);
        this.enterRule(localContext, 292, RustParser.RULE_neverType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2025;
            this.match(RustParser.NOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleType(): TupleTypeContext {
        let localContext = new TupleTypeContext(this.context, this.state);
        this.enterRule(localContext, 294, RustParser.RULE_tupleType);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2027;
            this.match(RustParser.LPAREN);
            this.state = 2038;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 128) {
                {
                this.state = 2031;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 2028;
                        this.type_();
                        this.state = 2029;
                        this.match(RustParser.COMMA);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2033;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 267, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 2036;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 128) {
                    {
                    this.state = 2035;
                    this.type_();
                    }
                }

                }
            }

            this.state = 2040;
            this.match(RustParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayType(): ArrayTypeContext {
        let localContext = new ArrayTypeContext(this.context, this.state);
        this.enterRule(localContext, 296, RustParser.RULE_arrayType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2042;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 2043;
            this.type_();
            this.state = 2044;
            this.match(RustParser.SEMI);
            this.state = 2045;
            this.expression(0);
            this.state = 2046;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sliceType(): SliceTypeContext {
        let localContext = new SliceTypeContext(this.context, this.state);
        this.enterRule(localContext, 298, RustParser.RULE_sliceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2048;
            this.match(RustParser.LSQUAREBRACKET);
            this.state = 2049;
            this.type_();
            this.state = 2050;
            this.match(RustParser.RSQUAREBRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public referenceType(): ReferenceTypeContext {
        let localContext = new ReferenceTypeContext(this.context, this.state);
        this.enterRule(localContext, 300, RustParser.RULE_referenceType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2052;
            this.match(RustParser.AND);
            this.state = 2054;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 2053;
                this.match(RustParser.KW_MUT);
                }
            }

            this.state = 2056;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rawPointerType(): RawPointerTypeContext {
        let localContext = new RawPointerTypeContext(this.context, this.state);
        this.enterRule(localContext, 302, RustParser.RULE_rawPointerType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2058;
            this.match(RustParser.STAR);
            this.state = 2059;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 20)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2060;
            this.typeNoBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bareFunctionType(): BareFunctionTypeContext {
        let localContext = new BareFunctionTypeContext(this.context, this.state);
        this.enterRule(localContext, 304, RustParser.RULE_bareFunctionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 2062;
                this.forLifetimes();
                }
            }

            this.state = 2065;
            this.functionTypeQualifiers();
            this.state = 2066;
            this.match(RustParser.KW_FN);
            this.state = 2067;
            this.match(RustParser.LPAREN);
            this.state = 2069;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 110 || _la === 121 || _la === 128) {
                {
                this.state = 2068;
                this.functionParametersMaybeNamedVariadic();
                }
            }

            this.state = 2071;
            this.match(RustParser.RPAREN);
            this.state = 2073;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 273, this.context) ) {
            case 1:
                {
                this.state = 2072;
                this.bareFunctionReturnType();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTypeQualifiers(): FunctionTypeQualifiersContext {
        let localContext = new FunctionTypeQualifiersContext(this.context, this.state);
        this.enterRule(localContext, 306, RustParser.RULE_functionTypeQualifiers);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2076;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 32) {
                {
                this.state = 2075;
                this.match(RustParser.KW_UNSAFE);
                }
            }

            this.state = 2082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 2078;
                this.match(RustParser.KW_EXTERN);
                this.state = 2080;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71) {
                    {
                    this.state = 2079;
                    this.abi();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bareFunctionReturnType(): BareFunctionReturnTypeContext {
        let localContext = new BareFunctionReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 308, RustParser.RULE_bareFunctionReturnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2084;
            this.match(RustParser.RARROW);
            this.state = 2085;
            this.typeNoBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext {
        let localContext = new FunctionParametersMaybeNamedVariadicContext(this.context, this.state);
        this.enterRule(localContext, 310, RustParser.RULE_functionParametersMaybeNamedVariadic);
        try {
            this.state = 2089;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2087;
                this.maybeNamedFunctionParameters();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2088;
                this.maybeNamedFunctionParametersVariadic();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext {
        let localContext = new MaybeNamedFunctionParametersContext(this.context, this.state);
        this.enterRule(localContext, 312, RustParser.RULE_maybeNamedFunctionParameters);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2091;
            this.maybeNamedParam();
            this.state = 2096;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 278, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2092;
                    this.match(RustParser.COMMA);
                    this.state = 2093;
                    this.maybeNamedParam();
                    }
                    }
                }
                this.state = 2098;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 278, this.context);
            }
            this.state = 2100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 2099;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedParam(): MaybeNamedParamContext {
        let localContext = new MaybeNamedParamContext(this.context, this.state);
        this.enterRule(localContext, 314, RustParser.RULE_maybeNamedParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2105;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 2102;
                this.outerAttribute();
                }
                }
                this.state = 2107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2113;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context) ) {
            case 1:
                {
                this.state = 2110;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_MACRORULES:
                case RustParser.NON_KEYWORD_IDENTIFIER:
                case RustParser.RAW_IDENTIFIER:
                    {
                    this.state = 2108;
                    this.identifier();
                    }
                    break;
                case RustParser.UNDERSCORE:
                    {
                    this.state = 2109;
                    this.match(RustParser.UNDERSCORE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2112;
                this.match(RustParser.COLON);
                }
                break;
            }
            this.state = 2115;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext {
        let localContext = new MaybeNamedFunctionParametersVariadicContext(this.context, this.state);
        this.enterRule(localContext, 316, RustParser.RULE_maybeNamedFunctionParametersVariadic);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2122;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 283, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2117;
                    this.maybeNamedParam();
                    this.state = 2118;
                    this.match(RustParser.COMMA);
                    }
                    }
                }
                this.state = 2124;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 283, this.context);
            }
            this.state = 2125;
            this.maybeNamedParam();
            this.state = 2126;
            this.match(RustParser.COMMA);
            this.state = 2130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 121) {
                {
                {
                this.state = 2127;
                this.outerAttribute();
                }
                }
                this.state = 2132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2133;
            this.match(RustParser.DOTDOTDOT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitObjectType(): TraitObjectTypeContext {
        let localContext = new TraitObjectTypeContext(this.context, this.state);
        this.enterRule(localContext, 318, RustParser.RULE_traitObjectType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 2135;
                this.match(RustParser.KW_DYN);
                }
            }

            this.state = 2138;
            this.typeParamBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext {
        let localContext = new TraitObjectTypeOneBoundContext(this.context, this.state);
        this.enterRule(localContext, 320, RustParser.RULE_traitObjectTypeOneBound);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 2140;
                this.match(RustParser.KW_DYN);
                }
            }

            this.state = 2143;
            this.traitBound();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implTraitType(): ImplTraitTypeContext {
        let localContext = new ImplTraitTypeContext(this.context, this.state);
        this.enterRule(localContext, 322, RustParser.RULE_implTraitType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2145;
            this.match(RustParser.KW_IMPL);
            this.state = 2146;
            this.typeParamBounds();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext {
        let localContext = new ImplTraitTypeOneBoundContext(this.context, this.state);
        this.enterRule(localContext, 324, RustParser.RULE_implTraitTypeOneBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2148;
            this.match(RustParser.KW_IMPL);
            this.state = 2149;
            this.traitBound();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inferredType(): InferredTypeContext {
        let localContext = new InferredTypeContext(this.context, this.state);
        this.enterRule(localContext, 326, RustParser.RULE_inferredType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2151;
            this.match(RustParser.UNDERSCORE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParamBounds(): TypeParamBoundsContext {
        let localContext = new TypeParamBoundsContext(this.context, this.state);
        this.enterRule(localContext, 328, RustParser.RULE_typeParamBounds);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2153;
            this.typeParamBound();
            this.state = 2158;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 287, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2154;
                    this.match(RustParser.PLUS);
                    this.state = 2155;
                    this.typeParamBound();
                    }
                    }
                }
                this.state = 2160;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 287, this.context);
            }
            this.state = 2162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 2161;
                this.match(RustParser.PLUS);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParamBound(): TypeParamBoundContext {
        let localContext = new TypeParamBoundContext(this.context, this.state);
        this.enterRule(localContext, 330, RustParser.RULE_typeParamBound);
        try {
            this.state = 2166;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_STATICLIFETIME:
            case RustParser.KW_UNDERLINELIFETIME:
            case RustParser.LIFETIME_OR_LABEL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2164;
                this.lifetime();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_FOR:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
            case RustParser.QUESTION:
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2165;
                this.traitBound();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traitBound(): TraitBoundContext {
        let localContext = new TraitBoundContext(this.context, this.state);
        this.enterRule(localContext, 332, RustParser.RULE_traitBound);
        let _la: number;
        try {
            this.state = 2185;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_CRATE:
            case RustParser.KW_FOR:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SELFTYPE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
            case RustParser.PATHSEP:
            case RustParser.QUESTION:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 123) {
                    {
                    this.state = 2168;
                    this.match(RustParser.QUESTION);
                    }
                }

                this.state = 2172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 2171;
                    this.forLifetimes();
                    }
                }

                this.state = 2174;
                this.typePath();
                }
                break;
            case RustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2175;
                this.match(RustParser.LPAREN);
                this.state = 2177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 123) {
                    {
                    this.state = 2176;
                    this.match(RustParser.QUESTION);
                    }
                }

                this.state = 2180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 2179;
                    this.forLifetimes();
                    }
                }

                this.state = 2182;
                this.typePath();
                this.state = 2183;
                this.match(RustParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeBounds(): LifetimeBoundsContext {
        let localContext = new LifetimeBoundsContext(this.context, this.state);
        this.enterRule(localContext, 334, RustParser.RULE_lifetimeBounds);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2192;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 295, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2187;
                    this.lifetime();
                    this.state = 2188;
                    this.match(RustParser.PLUS);
                    }
                    }
                }
                this.state = 2194;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 295, this.context);
            }
            this.state = 2196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0)) {
                {
                this.state = 2195;
                this.lifetime();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetime(): LifetimeContext {
        let localContext = new LifetimeContext(this.context, this.state);
        this.enterRule(localContext, 336, RustParser.RULE_lifetime);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2198;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 268435461) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simplePath(): SimplePathContext {
        let localContext = new SimplePathContext(this.context, this.state);
        this.enterRule(localContext, 338, RustParser.RULE_simplePath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 2200;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2203;
            this.simplePathSegment();
            this.state = 2208;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 298, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2204;
                    this.match(RustParser.PATHSEP);
                    this.state = 2205;
                    this.simplePathSegment();
                    }
                    }
                }
                this.state = 2210;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 298, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simplePathSegment(): SimplePathSegmentContext {
        let localContext = new SimplePathSegmentContext(this.context, this.state);
        this.enterRule(localContext, 340, RustParser.RULE_simplePathSegment);
        try {
            this.state = 2216;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2211;
                this.identifier();
                }
                break;
            case RustParser.KW_SUPER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2212;
                this.match(RustParser.KW_SUPER);
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2213;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            case RustParser.KW_CRATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2214;
                this.match(RustParser.KW_CRATE);
                }
                break;
            case RustParser.KW_DOLLARCRATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2215;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathInExpression(): PathInExpressionContext {
        let localContext = new PathInExpressionContext(this.context, this.state);
        this.enterRule(localContext, 342, RustParser.RULE_pathInExpression);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 2218;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2221;
            this.pathExprSegment();
            this.state = 2226;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 301, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2222;
                    this.match(RustParser.PATHSEP);
                    this.state = 2223;
                    this.pathExprSegment();
                    }
                    }
                }
                this.state = 2228;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 301, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathExprSegment(): PathExprSegmentContext {
        let localContext = new PathExprSegmentContext(this.context, this.state);
        this.enterRule(localContext, 344, RustParser.RULE_pathExprSegment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2229;
            this.pathIdentSegment();
            this.state = 2232;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 302, this.context) ) {
            case 1:
                {
                this.state = 2230;
                this.match(RustParser.PATHSEP);
                this.state = 2231;
                this.genericArgs();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        let localContext = new PathIdentSegmentContext(this.context, this.state);
        this.enterRule(localContext, 346, RustParser.RULE_pathIdentSegment);
        try {
            this.state = 2240;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.KW_MACRORULES:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2234;
                this.identifier();
                }
                break;
            case RustParser.KW_SUPER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2235;
                this.match(RustParser.KW_SUPER);
                }
                break;
            case RustParser.KW_SELFVALUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2236;
                this.match(RustParser.KW_SELFVALUE);
                }
                break;
            case RustParser.KW_SELFTYPE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2237;
                this.match(RustParser.KW_SELFTYPE);
                }
                break;
            case RustParser.KW_CRATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2238;
                this.match(RustParser.KW_CRATE);
                }
                break;
            case RustParser.KW_DOLLARCRATE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2239;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgs(): GenericArgsContext {
        let localContext = new GenericArgsContext(this.context, this.state);
        this.enterRule(localContext, 348, RustParser.RULE_genericArgs);
        let _la: number;
        try {
            let alternative: number;
            this.state = 2285;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 311, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2242;
                this.match(RustParser.LT);
                this.state = 2243;
                this.match(RustParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2244;
                this.match(RustParser.LT);
                this.state = 2245;
                this.genericArgsLifetimes();
                this.state = 2248;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 304, this.context) ) {
                case 1:
                    {
                    this.state = 2246;
                    this.match(RustParser.COMMA);
                    this.state = 2247;
                    this.genericArgsTypes();
                    }
                    break;
                }
                this.state = 2252;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 305, this.context) ) {
                case 1:
                    {
                    this.state = 2250;
                    this.match(RustParser.COMMA);
                    this.state = 2251;
                    this.genericArgsBindings();
                    }
                    break;
                }
                this.state = 2255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 2254;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2257;
                this.match(RustParser.GT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2259;
                this.match(RustParser.LT);
                this.state = 2260;
                this.genericArgsTypes();
                this.state = 2263;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 307, this.context) ) {
                case 1:
                    {
                    this.state = 2261;
                    this.match(RustParser.COMMA);
                    this.state = 2262;
                    this.genericArgsBindings();
                    }
                    break;
                }
                this.state = 2266;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 2265;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2268;
                this.match(RustParser.GT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2270;
                this.match(RustParser.LT);
                this.state = 2276;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 2271;
                        this.genericArg();
                        this.state = 2272;
                        this.match(RustParser.COMMA);
                        }
                        }
                    }
                    this.state = 2278;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                }
                this.state = 2279;
                this.genericArg();
                this.state = 2281;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 2280;
                    this.match(RustParser.COMMA);
                    }
                }

                this.state = 2283;
                this.match(RustParser.GT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArg(): GenericArgContext {
        let localContext = new GenericArgContext(this.context, this.state);
        this.enterRule(localContext, 350, RustParser.RULE_genericArg);
        try {
            this.state = 2291;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 312, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2287;
                this.lifetime();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2288;
                this.type_();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2289;
                this.genericArgsConst();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2290;
                this.genericArgsBinding();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsConst(): GenericArgsConstContext {
        let localContext = new GenericArgsConstContext(this.context, this.state);
        this.enterRule(localContext, 352, RustParser.RULE_genericArgsConst);
        let _la: number;
        try {
            this.state = 2299;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustParser.LCURLYBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2293;
                this.blockExpression();
                }
                break;
            case RustParser.KW_FALSE:
            case RustParser.KW_TRUE:
            case RustParser.CHAR_LITERAL:
            case RustParser.STRING_LITERAL:
            case RustParser.RAW_STRING_LITERAL:
            case RustParser.BYTE_LITERAL:
            case RustParser.BYTE_STRING_LITERAL:
            case RustParser.RAW_BYTE_STRING_LITERAL:
            case RustParser.INTEGER_LITERAL:
            case RustParser.FLOAT_LITERAL:
            case RustParser.MINUS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83) {
                    {
                    this.state = 2294;
                    this.match(RustParser.MINUS);
                    }
                }

                this.state = 2297;
                this.literalExpression();
                }
                break;
            case RustParser.KW_CRATE:
            case RustParser.KW_SELFVALUE:
            case RustParser.KW_SUPER:
            case RustParser.KW_MACRORULES:
            case RustParser.KW_DOLLARCRATE:
            case RustParser.NON_KEYWORD_IDENTIFIER:
            case RustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2298;
                this.simplePathSegment();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsLifetimes(): GenericArgsLifetimesContext {
        let localContext = new GenericArgsLifetimesContext(this.context, this.state);
        this.enterRule(localContext, 354, RustParser.RULE_genericArgsLifetimes);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2301;
            this.lifetime();
            this.state = 2306;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 315, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2302;
                    this.match(RustParser.COMMA);
                    this.state = 2303;
                    this.lifetime();
                    }
                    }
                }
                this.state = 2308;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 315, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsTypes(): GenericArgsTypesContext {
        let localContext = new GenericArgsTypesContext(this.context, this.state);
        this.enterRule(localContext, 356, RustParser.RULE_genericArgsTypes);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2309;
            this.type_();
            this.state = 2314;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 316, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2310;
                    this.match(RustParser.COMMA);
                    this.state = 2311;
                    this.type_();
                    }
                    }
                }
                this.state = 2316;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 316, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsBindings(): GenericArgsBindingsContext {
        let localContext = new GenericArgsBindingsContext(this.context, this.state);
        this.enterRule(localContext, 358, RustParser.RULE_genericArgsBindings);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2317;
            this.genericArgsBinding();
            this.state = 2322;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 317, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2318;
                    this.match(RustParser.COMMA);
                    this.state = 2319;
                    this.genericArgsBinding();
                    }
                    }
                }
                this.state = 2324;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 317, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericArgsBinding(): GenericArgsBindingContext {
        let localContext = new GenericArgsBindingContext(this.context, this.state);
        this.enterRule(localContext, 360, RustParser.RULE_genericArgsBinding);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2325;
            this.identifier();
            this.state = 2326;
            this.match(RustParser.EQ);
            this.state = 2327;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext {
        let localContext = new QualifiedPathInExpressionContext(this.context, this.state);
        this.enterRule(localContext, 362, RustParser.RULE_qualifiedPathInExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2329;
            this.qualifiedPathType();
            this.state = 2332;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2330;
                    this.match(RustParser.PATHSEP);
                    this.state = 2331;
                    this.pathExprSegment();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2334;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 318, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        let localContext = new QualifiedPathTypeContext(this.context, this.state);
        this.enterRule(localContext, 364, RustParser.RULE_qualifiedPathType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2336;
            this.match(RustParser.LT);
            this.state = 2337;
            this.type_();
            this.state = 2340;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 2338;
                this.match(RustParser.KW_AS);
                this.state = 2339;
                this.typePath();
                }
            }

            this.state = 2342;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedPathInType(): QualifiedPathInTypeContext {
        let localContext = new QualifiedPathInTypeContext(this.context, this.state);
        this.enterRule(localContext, 366, RustParser.RULE_qualifiedPathInType);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2344;
            this.qualifiedPathType();
            this.state = 2347;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2345;
                    this.match(RustParser.PATHSEP);
                    this.state = 2346;
                    this.typePathSegment();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2349;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 320, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePath(): TypePathContext {
        let localContext = new TypePathContext(this.context, this.state);
        this.enterRule(localContext, 368, RustParser.RULE_typePath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2352;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 2351;
                this.match(RustParser.PATHSEP);
                }
            }

            this.state = 2354;
            this.typePathSegment();
            this.state = 2359;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 322, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2355;
                    this.match(RustParser.PATHSEP);
                    this.state = 2356;
                    this.typePathSegment();
                    }
                    }
                }
                this.state = 2361;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 322, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathSegment(): TypePathSegmentContext {
        let localContext = new TypePathSegmentContext(this.context, this.state);
        this.enterRule(localContext, 370, RustParser.RULE_typePathSegment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2362;
            this.pathIdentSegment();
            this.state = 2364;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 323, this.context) ) {
            case 1:
                {
                this.state = 2363;
                this.match(RustParser.PATHSEP);
                }
                break;
            }
            this.state = 2368;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
            case 1:
                {
                this.state = 2366;
                this.genericArgs();
                }
                break;
            case 2:
                {
                this.state = 2367;
                this.typePathFn();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathFn(): TypePathFnContext {
        let localContext = new TypePathFnContext(this.context, this.state);
        this.enterRule(localContext, 372, RustParser.RULE_typePathFn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2370;
            this.match(RustParser.LPAREN);
            this.state = 2372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0) || _la === 89 || _la === 128) {
                {
                this.state = 2371;
                this.typePathInputs();
                }
            }

            this.state = 2374;
            this.match(RustParser.RPAREN);
            this.state = 2377;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 326, this.context) ) {
            case 1:
                {
                this.state = 2375;
                this.match(RustParser.RARROW);
                this.state = 2376;
                this.type_();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typePathInputs(): TypePathInputsContext {
        let localContext = new TypePathInputsContext(this.context, this.state);
        this.enterRule(localContext, 374, RustParser.RULE_typePathInputs);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2379;
            this.type_();
            this.state = 2384;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 327, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2380;
                    this.match(RustParser.COMMA);
                    this.state = 2381;
                    this.type_();
                    }
                    }
                }
                this.state = 2386;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 327, this.context);
            }
            this.state = 2388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 2387;
                this.match(RustParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visibility(): VisibilityContext {
        let localContext = new VisibilityContext(this.context, this.state);
        this.enterRule(localContext, 376, RustParser.RULE_visibility);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2390;
            this.match(RustParser.KW_PUB);
            this.state = 2400;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 330, this.context) ) {
            case 1:
                {
                this.state = 2391;
                this.match(RustParser.LPAREN);
                this.state = 2397;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustParser.KW_CRATE:
                    {
                    this.state = 2392;
                    this.match(RustParser.KW_CRATE);
                    }
                    break;
                case RustParser.KW_SELFVALUE:
                    {
                    this.state = 2393;
                    this.match(RustParser.KW_SELFVALUE);
                    }
                    break;
                case RustParser.KW_SUPER:
                    {
                    this.state = 2394;
                    this.match(RustParser.KW_SUPER);
                    }
                    break;
                case RustParser.KW_IN:
                    {
                    this.state = 2395;
                    this.match(RustParser.KW_IN);
                    this.state = 2396;
                    this.simplePath();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2399;
                this.match(RustParser.RPAREN);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 378, RustParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2402;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 25) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 380, RustParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2404;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4194303) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext {
        let localContext = new MacroIdentifierLikeTokenContext(this.context, this.state);
        this.enterRule(localContext, 382, RustParser.RULE_macroIdentifierLikeToken);
        try {
            this.state = 2412;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 331, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2406;
                this.keyword();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2407;
                this.identifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2408;
                this.match(RustParser.KW_MACRORULES);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2409;
                this.match(RustParser.KW_UNDERLINELIFETIME);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2410;
                this.match(RustParser.KW_DOLLARCRATE);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2411;
                this.match(RustParser.LIFETIME_OR_LABEL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroLiteralToken(): MacroLiteralTokenContext {
        let localContext = new MacroLiteralTokenContext(this.context, this.state);
        this.enterRule(localContext, 384, RustParser.RULE_macroLiteralToken);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2414;
            this.literalExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext {
        let localContext = new MacroPunctuationTokenContext(this.context, this.state);
        this.enterRule(localContext, 386, RustParser.RULE_macroPunctuationToken);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2416;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 4294967293) !== 0) || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 127) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shl(): ShlContext {
        let localContext = new ShlContext(this.context, this.state);
        this.enterRule(localContext, 388, RustParser.RULE_shl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2418;
            this.match(RustParser.LT);
            this.state = 2419;
            if (!(this.next('<'))) {
                throw this.createFailedPredicateException("this.next('<')");
            }
            this.state = 2420;
            this.match(RustParser.LT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shr(): ShrContext {
        let localContext = new ShrContext(this.context, this.state);
        this.enterRule(localContext, 390, RustParser.RULE_shr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2422;
            this.match(RustParser.GT);
            this.state = 2423;
            if (!(this.next('>'))) {
                throw this.createFailedPredicateException("this.next('>')");
            }
            this.state = 2424;
            this.match(RustParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 77:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 194:
            return this.shl_sempred(localContext as ShlContext, predIndex);
        case 195:
            return this.shr_sempred(localContext as ShrContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 26);
        case 1:
            return this.precpred(this.context, 25);
        case 2:
            return this.precpred(this.context, 24);
        case 3:
            return this.precpred(this.context, 23);
        case 4:
            return this.precpred(this.context, 22);
        case 5:
            return this.precpred(this.context, 21);
        case 6:
            return this.precpred(this.context, 20);
        case 7:
            return this.precpred(this.context, 19);
        case 8:
            return this.precpred(this.context, 18);
        case 9:
            return this.precpred(this.context, 14);
        case 10:
            return this.precpred(this.context, 13);
        case 11:
            return this.precpred(this.context, 12);
        case 12:
            return this.precpred(this.context, 37);
        case 13:
            return this.precpred(this.context, 36);
        case 14:
            return this.precpred(this.context, 35);
        case 15:
            return this.precpred(this.context, 34);
        case 16:
            return this.precpred(this.context, 33);
        case 17:
            return this.precpred(this.context, 32);
        case 18:
            return this.precpred(this.context, 31);
        case 19:
            return this.precpred(this.context, 27);
        case 20:
            return this.precpred(this.context, 17);
        }
        return true;
    }
    private shl_sempred(localContext: ShlContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 21:
            return this.next('<');
        }
        return true;
    }
    private shr_sempred(localContext: ShrContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 22:
            return this.next('>');
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,129,2427,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,1,0,5,0,394,8,0,
        10,0,12,0,397,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,5,2,407,8,2,10,
        2,12,2,410,9,2,1,2,1,2,1,2,5,2,415,8,2,10,2,12,2,418,9,2,1,2,1,2,
        1,2,5,2,423,8,2,10,2,12,2,426,9,2,1,2,3,2,429,8,2,1,3,4,3,432,8,
        3,11,3,12,3,433,1,3,3,3,437,8,3,1,4,1,4,1,4,1,4,1,4,3,4,444,8,4,
        1,5,1,5,1,5,1,5,5,5,450,8,5,10,5,12,5,453,9,5,1,5,1,5,1,5,1,5,1,
        5,1,5,1,5,5,5,462,8,5,10,5,12,5,465,9,5,1,5,1,5,1,5,1,5,1,5,1,5,
        1,5,5,5,474,8,5,10,5,12,5,477,9,5,1,5,1,5,3,5,481,8,5,1,6,1,6,1,
        6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
        7,3,7,502,8,7,1,8,1,8,1,8,5,8,507,8,8,10,8,12,8,510,9,8,1,8,3,8,
        513,8,8,1,9,1,9,1,9,1,9,1,10,1,10,5,10,521,8,10,10,10,12,10,524,
        9,10,1,10,1,10,1,10,5,10,529,8,10,10,10,12,10,532,9,10,1,10,1,10,
        1,10,5,10,537,8,10,10,10,12,10,540,9,10,1,10,3,10,543,8,10,1,11,
        4,11,546,8,11,11,11,12,11,547,1,11,1,11,1,11,1,11,3,11,554,8,11,
        1,11,1,11,1,11,1,11,1,11,4,11,561,8,11,11,11,12,11,562,1,11,1,11,
        3,11,567,8,11,1,11,1,11,3,11,571,8,11,1,12,1,12,1,12,1,12,3,12,577,
        8,12,1,13,1,13,1,14,1,14,1,14,1,14,3,14,585,8,14,1,15,1,15,1,16,
        1,16,1,17,5,17,592,8,17,10,17,12,17,595,9,17,1,17,1,17,3,17,599,
        8,17,1,18,3,18,602,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,3,18,617,8,18,1,19,1,19,3,19,621,8,19,1,
        20,3,20,624,8,20,1,20,1,20,1,20,1,20,1,20,5,20,631,8,20,10,20,12,
        20,634,9,20,1,20,5,20,637,8,20,10,20,12,20,640,9,20,1,20,3,20,643,
        8,20,1,21,1,21,1,21,1,21,3,21,649,8,21,1,21,1,21,1,22,1,22,3,22,
        655,8,22,1,23,1,23,1,23,3,23,660,8,23,1,24,1,24,1,24,1,24,1,25,3,
        25,667,8,25,1,25,3,25,670,8,25,1,25,1,25,1,25,1,25,1,25,5,25,677,
        8,25,10,25,12,25,680,9,25,1,25,3,25,683,8,25,3,25,685,8,25,1,25,
        3,25,688,8,25,1,25,1,25,1,25,1,25,3,25,694,8,25,3,25,696,8,25,3,
        25,698,8,25,1,26,1,26,1,26,1,26,3,26,704,8,26,1,26,1,26,3,26,708,
        8,26,1,26,1,26,1,27,3,27,713,8,27,1,27,3,27,716,8,27,1,27,3,27,719,
        8,27,1,27,1,27,3,27,723,8,27,3,27,725,8,27,1,28,1,28,1,29,1,29,1,
        29,5,29,732,8,29,10,29,12,29,735,9,29,1,29,3,29,738,8,29,1,30,5,
        30,741,8,30,10,30,12,30,744,9,30,1,30,1,30,3,30,748,8,30,1,31,1,
        31,3,31,752,8,31,3,31,754,8,31,1,31,3,31,757,8,31,1,31,1,31,1,32,
        3,32,762,8,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,
        1,34,1,34,3,34,776,8,34,1,35,1,35,1,35,1,36,1,36,1,36,3,36,784,8,
        36,1,36,3,36,787,8,36,1,36,1,36,3,36,791,8,36,1,36,1,36,1,37,1,37,
        3,37,797,8,37,1,38,1,38,1,38,3,38,802,8,38,1,38,3,38,805,8,38,1,
        38,1,38,3,38,809,8,38,1,38,1,38,3,38,813,8,38,1,39,1,39,1,39,3,39,
        818,8,39,1,39,1,39,3,39,822,8,39,1,39,1,39,3,39,826,8,39,1,39,1,
        39,1,40,1,40,1,40,5,40,833,8,40,10,40,12,40,836,9,40,1,40,3,40,839,
        8,40,1,41,5,41,842,8,41,10,41,12,41,845,9,41,1,41,3,41,848,8,41,
        1,41,1,41,1,41,1,41,1,42,1,42,1,42,5,42,857,8,42,10,42,12,42,860,
        9,42,1,42,3,42,863,8,42,1,43,5,43,866,8,43,10,43,12,43,869,9,43,
        1,43,3,43,872,8,43,1,43,1,43,1,44,1,44,1,44,3,44,879,8,44,1,44,3,
        44,882,8,44,1,44,1,44,3,44,886,8,44,1,44,1,44,1,45,1,45,1,45,5,45,
        893,8,45,10,45,12,45,896,9,45,1,45,3,45,899,8,45,1,46,5,46,902,8,
        46,10,46,12,46,905,9,46,1,46,3,46,908,8,46,1,46,1,46,1,46,1,46,3,
        46,914,8,46,1,47,1,47,3,47,918,8,47,1,47,1,47,1,48,1,48,3,48,924,
        8,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,3,50,934,8,50,1,50,
        3,50,937,8,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,3,51,946,8,51,1,
        51,1,51,1,51,1,51,3,51,952,8,51,1,51,1,51,1,52,1,52,3,52,958,8,52,
        1,52,1,52,1,52,1,52,1,52,3,52,965,8,52,1,52,1,52,1,53,3,53,970,8,
        53,1,53,1,53,1,53,3,53,975,8,53,1,53,1,53,3,53,979,8,53,3,53,981,
        8,53,1,53,3,53,984,8,53,1,53,1,53,5,53,988,8,53,10,53,12,53,991,
        9,53,1,53,5,53,994,8,53,10,53,12,53,997,9,53,1,53,1,53,1,54,1,54,
        3,54,1003,8,54,1,55,1,55,3,55,1007,8,55,1,55,1,55,3,55,1011,8,55,
        1,55,1,55,5,55,1015,8,55,10,55,12,55,1018,9,55,1,55,5,55,1021,8,
        55,10,55,12,55,1024,9,55,1,55,1,55,1,56,3,56,1029,8,56,1,56,1,56,
        3,56,1033,8,56,1,56,3,56,1036,8,56,1,56,1,56,1,56,1,56,3,56,1042,
        8,56,1,56,1,56,5,56,1046,8,56,10,56,12,56,1049,9,56,1,56,5,56,1052,
        8,56,10,56,12,56,1055,9,56,1,56,1,56,1,57,3,57,1060,8,57,1,57,1,
        57,3,57,1064,8,57,1,57,1,57,5,57,1068,8,57,10,57,12,57,1071,9,57,
        1,57,5,57,1074,8,57,10,57,12,57,1077,9,57,1,57,1,57,1,58,5,58,1082,
        8,58,10,58,12,58,1085,9,58,1,58,1,58,3,58,1089,8,58,1,58,1,58,3,
        58,1093,8,58,3,58,1095,8,58,1,59,1,59,1,59,1,59,5,59,1101,8,59,10,
        59,12,59,1104,9,59,1,59,1,59,3,59,1108,8,59,3,59,1110,8,59,1,59,
        1,59,1,60,5,60,1115,8,60,10,60,12,60,1118,9,60,1,60,1,60,1,60,3,
        60,1123,8,60,1,61,3,61,1126,8,61,1,61,1,61,1,61,3,61,1131,8,61,1,
        62,3,62,1134,8,62,1,62,1,62,1,62,3,62,1139,8,62,3,62,1141,8,62,1,
        62,1,62,3,62,1145,8,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,
        64,5,64,1156,8,64,10,64,12,64,1159,9,64,1,64,3,64,1162,8,64,1,65,
        1,65,3,65,1166,8,65,1,66,1,66,1,66,1,66,1,67,3,67,1173,8,67,1,67,
        1,67,1,67,3,67,1178,8,67,1,68,1,68,1,68,1,69,5,69,1184,8,69,10,69,
        12,69,1187,9,69,1,69,1,69,3,69,1191,8,69,1,69,1,69,1,69,3,69,1196,
        8,69,3,69,1198,8,69,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,
        1,71,1,71,1,72,1,72,3,72,1213,8,72,1,73,1,73,1,73,3,73,1218,8,73,
        1,74,1,74,1,74,1,74,3,74,1224,8,74,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,3,75,1233,8,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,3,76,1242,
        8,76,3,76,1244,8,76,1,77,1,77,4,77,1248,8,77,11,77,12,77,1249,1,
        77,1,77,1,77,1,77,1,77,1,77,3,77,1258,8,77,1,77,1,77,1,77,1,77,1,
        77,1,77,1,77,3,77,1267,8,77,1,77,1,77,1,77,1,77,3,77,1273,8,77,1,
        77,3,77,1276,8,77,1,77,1,77,3,77,1280,8,77,1,77,3,77,1283,8,77,1,
        77,1,77,3,77,1287,8,77,1,77,1,77,5,77,1291,8,77,10,77,12,77,1294,
        9,77,1,77,1,77,1,77,1,77,1,77,5,77,1301,8,77,10,77,12,77,1304,9,
        77,1,77,3,77,1307,8,77,1,77,1,77,1,77,5,77,1312,8,77,10,77,12,77,
        1315,9,77,1,77,3,77,1318,8,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,
        1326,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1337,
        8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,
        1376,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,3,77,1392,8,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1408,8,77,5,77,1410,8,77,
        10,77,12,77,1413,9,77,1,78,1,78,1,79,1,79,1,80,4,80,1420,8,80,11,
        80,12,80,1421,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,
        1433,8,80,1,81,1,81,1,82,1,82,3,82,1439,8,82,1,83,1,83,3,83,1443,
        8,83,1,83,1,83,1,84,4,84,1448,8,84,11,84,12,84,1449,1,84,3,84,1453,
        8,84,1,84,3,84,1456,8,84,1,85,1,85,3,85,1460,8,85,1,85,1,85,1,86,
        1,86,1,86,1,87,1,87,1,87,5,87,1470,8,87,10,87,12,87,1473,9,87,1,
        87,3,87,1476,8,87,1,87,1,87,1,87,1,87,3,87,1482,8,87,1,88,1,88,1,
        88,4,88,1487,8,88,11,88,12,88,1488,1,88,3,88,1492,8,88,1,89,1,89,
        1,90,1,90,1,90,3,90,1499,8,90,1,91,1,91,1,91,5,91,1504,8,91,10,91,
        12,91,1507,9,91,1,91,1,91,3,91,1511,8,91,1,91,1,91,1,92,1,92,1,92,
        5,92,1518,8,92,10,92,12,92,1521,9,92,1,92,1,92,1,92,3,92,1526,8,
        92,3,92,1528,8,92,1,93,5,93,1531,8,93,10,93,12,93,1534,9,93,1,93,
        1,93,1,93,3,93,1539,8,93,1,93,1,93,1,93,3,93,1544,8,93,1,94,1,94,
        1,94,1,95,1,95,1,95,5,95,1552,8,95,10,95,12,95,1555,9,95,1,95,1,
        95,1,95,5,95,1560,8,95,10,95,12,95,1563,9,95,1,95,3,95,1566,8,95,
        3,95,1568,8,95,1,95,1,95,1,96,1,96,1,97,1,97,1,97,3,97,1577,8,97,
        1,98,1,98,1,98,3,98,1582,8,98,1,98,1,98,1,99,1,99,1,99,5,99,1589,
        8,99,10,99,12,99,1592,9,99,1,99,3,99,1595,8,99,1,100,1,100,1,100,
        3,100,1600,8,100,1,100,1,100,1,100,3,100,1605,8,100,1,101,1,101,
        1,101,1,101,1,101,5,101,1612,8,101,10,101,12,101,1615,9,101,1,101,
        3,101,1618,8,101,3,101,1620,8,101,1,101,1,101,1,102,1,102,1,103,
        1,103,1,103,5,103,1629,8,103,10,103,12,103,1632,9,103,1,103,3,103,
        1635,8,103,1,104,3,104,1638,8,104,1,104,1,104,1,104,3,104,1643,8,
        104,1,104,3,104,1646,8,104,1,104,1,104,1,104,1,104,1,104,3,104,1653,
        8,104,1,105,1,105,1,105,5,105,1658,8,105,10,105,12,105,1661,9,105,
        1,105,3,105,1664,8,105,1,106,5,106,1667,8,106,10,106,12,106,1670,
        9,106,1,106,1,106,1,106,3,106,1675,8,106,1,107,3,107,1678,8,107,
        1,107,1,107,1,107,1,107,3,107,1684,8,107,1,108,1,108,1,108,1,109,
        1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,
        1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,113,1,113,1,113,
        1,113,1,113,1,113,3,113,1715,8,113,3,113,1717,8,113,1,114,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,1,114,1,114,3,114,1729,8,114,
        3,114,1731,8,114,1,115,1,115,1,115,1,115,5,115,1737,8,115,10,115,
        12,115,1740,9,115,1,115,3,115,1743,8,115,1,115,1,115,1,116,1,116,
        1,116,1,116,5,116,1751,8,116,10,116,12,116,1754,9,116,1,116,1,116,
        1,116,1,116,3,116,1760,8,116,1,117,1,117,1,117,1,117,1,117,3,117,
        1767,8,117,3,117,1769,8,117,1,118,5,118,1772,8,118,10,118,12,118,
        1775,9,118,1,118,1,118,3,118,1779,8,118,1,119,1,119,1,119,1,120,
        3,120,1785,8,120,1,120,1,120,1,120,5,120,1790,8,120,10,120,12,120,
        1793,9,120,1,121,1,121,3,121,1797,8,121,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,3,122,1810,8,122,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,1821,8,123,
        1,123,1,123,3,123,1825,8,123,1,123,3,123,1828,8,123,1,124,3,124,
        1831,8,124,1,124,3,124,1834,8,124,1,124,1,124,1,124,3,124,1839,8,
        124,1,125,1,125,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,3,127,1856,8,127,1,128,1,128,1,128,
        3,128,1861,8,128,1,128,1,128,3,128,1865,8,128,1,128,1,128,3,128,
        1869,8,128,1,129,1,129,1,129,3,129,1874,8,129,1,129,1,129,1,130,
        1,130,1,130,3,130,1881,8,130,3,130,1883,8,130,1,130,3,130,1886,8,
        130,1,131,1,131,1,131,5,131,1891,8,131,10,131,12,131,1894,9,131,
        1,132,5,132,1897,8,132,10,132,12,132,1900,9,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,3,132,1911,8,132,1,132,3,132,
        1914,8,132,1,132,3,132,1917,8,132,1,133,5,133,1920,8,133,10,133,
        12,133,1923,9,133,1,133,1,133,1,134,1,134,1,134,3,134,1930,8,134,
        1,134,1,134,1,135,1,135,1,135,5,135,1937,8,135,10,135,12,135,1940,
        9,135,1,135,3,135,1943,8,135,1,136,1,136,3,136,1947,8,136,1,136,
        1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,4,137,1958,8,137,
        11,137,12,137,1959,1,137,3,137,1963,8,137,3,137,1965,8,137,1,138,
        1,138,1,138,1,138,1,139,1,139,3,139,1973,8,139,1,139,1,139,1,140,
        1,140,1,140,5,140,1980,8,140,10,140,12,140,1983,9,140,1,140,3,140,
        1986,8,140,1,141,1,141,3,141,1990,8,141,1,142,1,142,1,142,3,142,
        1995,8,142,1,143,1,143,5,143,1999,8,143,10,143,12,143,2002,9,143,
        1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,3,144,2020,8,144,1,145,1,145,1,145,
        1,145,1,146,1,146,1,147,1,147,1,147,1,147,4,147,2032,8,147,11,147,
        12,147,2033,1,147,3,147,2037,8,147,3,147,2039,8,147,1,147,1,147,
        1,148,1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,150,
        1,150,3,150,2055,8,150,1,150,1,150,1,151,1,151,1,151,1,151,1,152,
        3,152,2064,8,152,1,152,1,152,1,152,1,152,3,152,2070,8,152,1,152,
        1,152,3,152,2074,8,152,1,153,3,153,2077,8,153,1,153,1,153,3,153,
        2081,8,153,3,153,2083,8,153,1,154,1,154,1,154,1,155,1,155,3,155,
        2090,8,155,1,156,1,156,1,156,5,156,2095,8,156,10,156,12,156,2098,
        9,156,1,156,3,156,2101,8,156,1,157,5,157,2104,8,157,10,157,12,157,
        2107,9,157,1,157,1,157,3,157,2111,8,157,1,157,3,157,2114,8,157,1,
        157,1,157,1,158,1,158,1,158,5,158,2121,8,158,10,158,12,158,2124,
        9,158,1,158,1,158,1,158,5,158,2129,8,158,10,158,12,158,2132,9,158,
        1,158,1,158,1,159,3,159,2137,8,159,1,159,1,159,1,160,3,160,2142,
        8,160,1,160,1,160,1,161,1,161,1,161,1,162,1,162,1,162,1,163,1,163,
        1,164,1,164,1,164,5,164,2157,8,164,10,164,12,164,2160,9,164,1,164,
        3,164,2163,8,164,1,165,1,165,3,165,2167,8,165,1,166,3,166,2170,8,
        166,1,166,3,166,2173,8,166,1,166,1,166,1,166,3,166,2178,8,166,1,
        166,3,166,2181,8,166,1,166,1,166,1,166,3,166,2186,8,166,1,167,1,
        167,1,167,5,167,2191,8,167,10,167,12,167,2194,9,167,1,167,3,167,
        2197,8,167,1,168,1,168,1,169,3,169,2202,8,169,1,169,1,169,1,169,
        5,169,2207,8,169,10,169,12,169,2210,9,169,1,170,1,170,1,170,1,170,
        1,170,3,170,2217,8,170,1,171,3,171,2220,8,171,1,171,1,171,1,171,
        5,171,2225,8,171,10,171,12,171,2228,9,171,1,172,1,172,1,172,3,172,
        2233,8,172,1,173,1,173,1,173,1,173,1,173,1,173,3,173,2241,8,173,
        1,174,1,174,1,174,1,174,1,174,1,174,3,174,2249,8,174,1,174,1,174,
        3,174,2253,8,174,1,174,3,174,2256,8,174,1,174,1,174,1,174,1,174,
        1,174,1,174,3,174,2264,8,174,1,174,3,174,2267,8,174,1,174,1,174,
        1,174,1,174,1,174,1,174,5,174,2275,8,174,10,174,12,174,2278,9,174,
        1,174,1,174,3,174,2282,8,174,1,174,1,174,3,174,2286,8,174,1,175,
        1,175,1,175,1,175,3,175,2292,8,175,1,176,1,176,3,176,2296,8,176,
        1,176,1,176,3,176,2300,8,176,1,177,1,177,1,177,5,177,2305,8,177,
        10,177,12,177,2308,9,177,1,178,1,178,1,178,5,178,2313,8,178,10,178,
        12,178,2316,9,178,1,179,1,179,1,179,5,179,2321,8,179,10,179,12,179,
        2324,9,179,1,180,1,180,1,180,1,180,1,181,1,181,1,181,4,181,2333,
        8,181,11,181,12,181,2334,1,182,1,182,1,182,1,182,3,182,2341,8,182,
        1,182,1,182,1,183,1,183,1,183,4,183,2348,8,183,11,183,12,183,2349,
        1,184,3,184,2353,8,184,1,184,1,184,1,184,5,184,2358,8,184,10,184,
        12,184,2361,9,184,1,185,1,185,3,185,2365,8,185,1,185,1,185,3,185,
        2369,8,185,1,186,1,186,3,186,2373,8,186,1,186,1,186,1,186,3,186,
        2378,8,186,1,187,1,187,1,187,5,187,2383,8,187,10,187,12,187,2386,
        9,187,1,187,3,187,2389,8,187,1,188,1,188,1,188,1,188,1,188,1,188,
        1,188,3,188,2398,8,188,1,188,3,188,2401,8,188,1,189,1,189,1,190,
        1,190,1,191,1,191,1,191,1,191,1,191,1,191,3,191,2413,8,191,1,192,
        1,192,1,193,1,193,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,
        1,195,0,1,154,196,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
        78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
        116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,
        148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,
        180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,
        212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,
        244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,
        276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,
        308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,
        340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,
        372,374,376,378,380,382,384,386,388,390,0,13,3,0,82,82,84,84,123,
        123,1,0,70,71,2,0,83,83,88,88,1,0,84,86,1,0,82,83,1,0,103,108,1,
        0,92,101,4,0,9,9,30,30,69,75,80,80,2,0,3,3,20,20,3,0,53,53,55,55,
        81,81,2,0,54,54,57,58,1,0,1,53,2,0,83,83,85,121,2695,0,395,1,0,0,
        0,2,400,1,0,0,0,4,428,1,0,0,0,6,436,1,0,0,0,8,443,1,0,0,0,10,480,
        1,0,0,0,12,482,1,0,0,0,14,501,1,0,0,0,16,503,1,0,0,0,18,514,1,0,
        0,0,20,542,1,0,0,0,22,570,1,0,0,0,24,576,1,0,0,0,26,578,1,0,0,0,
        28,584,1,0,0,0,30,586,1,0,0,0,32,588,1,0,0,0,34,593,1,0,0,0,36,601,
        1,0,0,0,38,620,1,0,0,0,40,623,1,0,0,0,42,644,1,0,0,0,44,654,1,0,
        0,0,46,656,1,0,0,0,48,661,1,0,0,0,50,697,1,0,0,0,52,699,1,0,0,0,
        54,712,1,0,0,0,56,726,1,0,0,0,58,728,1,0,0,0,60,742,1,0,0,0,62,753,
        1,0,0,0,64,761,1,0,0,0,66,767,1,0,0,0,68,771,1,0,0,0,70,777,1,0,
        0,0,72,780,1,0,0,0,74,796,1,0,0,0,76,798,1,0,0,0,78,814,1,0,0,0,
        80,829,1,0,0,0,82,843,1,0,0,0,84,853,1,0,0,0,86,867,1,0,0,0,88,875,
        1,0,0,0,90,889,1,0,0,0,92,903,1,0,0,0,94,915,1,0,0,0,96,921,1,0,
        0,0,98,927,1,0,0,0,100,930,1,0,0,0,102,942,1,0,0,0,104,955,1,0,0,
        0,106,969,1,0,0,0,108,1002,1,0,0,0,110,1004,1,0,0,0,112,1028,1,0,
        0,0,114,1059,1,0,0,0,116,1083,1,0,0,0,118,1096,1,0,0,0,120,1116,
        1,0,0,0,122,1125,1,0,0,0,124,1133,1,0,0,0,126,1146,1,0,0,0,128,1151,
        1,0,0,0,130,1165,1,0,0,0,132,1167,1,0,0,0,134,1172,1,0,0,0,136,1179,
        1,0,0,0,138,1185,1,0,0,0,140,1199,1,0,0,0,142,1205,1,0,0,0,144,1210,
        1,0,0,0,146,1217,1,0,0,0,148,1223,1,0,0,0,150,1225,1,0,0,0,152,1243,
        1,0,0,0,154,1325,1,0,0,0,156,1414,1,0,0,0,158,1416,1,0,0,0,160,1432,
        1,0,0,0,162,1434,1,0,0,0,164,1438,1,0,0,0,166,1440,1,0,0,0,168,1455,
        1,0,0,0,170,1457,1,0,0,0,172,1463,1,0,0,0,174,1481,1,0,0,0,176,1486,
        1,0,0,0,178,1493,1,0,0,0,180,1498,1,0,0,0,182,1500,1,0,0,0,184,1514,
        1,0,0,0,186,1532,1,0,0,0,188,1545,1,0,0,0,190,1548,1,0,0,0,192,1571,
        1,0,0,0,194,1576,1,0,0,0,196,1578,1,0,0,0,198,1585,1,0,0,0,200,1604,
        1,0,0,0,202,1606,1,0,0,0,204,1623,1,0,0,0,206,1625,1,0,0,0,208,1637,
        1,0,0,0,210,1654,1,0,0,0,212,1668,1,0,0,0,214,1677,1,0,0,0,216,1685,
        1,0,0,0,218,1688,1,0,0,0,220,1692,1,0,0,0,222,1699,1,0,0,0,224,1705,
        1,0,0,0,226,1708,1,0,0,0,228,1718,1,0,0,0,230,1732,1,0,0,0,232,1752,
        1,0,0,0,234,1768,1,0,0,0,236,1773,1,0,0,0,238,1780,1,0,0,0,240,1784,
        1,0,0,0,242,1796,1,0,0,0,244,1809,1,0,0,0,246,1827,1,0,0,0,248,1830,
        1,0,0,0,250,1840,1,0,0,0,252,1842,1,0,0,0,254,1855,1,0,0,0,256,1868,
        1,0,0,0,258,1870,1,0,0,0,260,1885,1,0,0,0,262,1887,1,0,0,0,264,1898,
        1,0,0,0,266,1921,1,0,0,0,268,1926,1,0,0,0,270,1933,1,0,0,0,272,1944,
        1,0,0,0,274,1964,1,0,0,0,276,1966,1,0,0,0,278,1970,1,0,0,0,280,1976,
        1,0,0,0,282,1989,1,0,0,0,284,1994,1,0,0,0,286,1996,1,0,0,0,288,2019,
        1,0,0,0,290,2021,1,0,0,0,292,2025,1,0,0,0,294,2027,1,0,0,0,296,2042,
        1,0,0,0,298,2048,1,0,0,0,300,2052,1,0,0,0,302,2058,1,0,0,0,304,2063,
        1,0,0,0,306,2076,1,0,0,0,308,2084,1,0,0,0,310,2089,1,0,0,0,312,2091,
        1,0,0,0,314,2105,1,0,0,0,316,2122,1,0,0,0,318,2136,1,0,0,0,320,2141,
        1,0,0,0,322,2145,1,0,0,0,324,2148,1,0,0,0,326,2151,1,0,0,0,328,2153,
        1,0,0,0,330,2166,1,0,0,0,332,2185,1,0,0,0,334,2192,1,0,0,0,336,2198,
        1,0,0,0,338,2201,1,0,0,0,340,2216,1,0,0,0,342,2219,1,0,0,0,344,2229,
        1,0,0,0,346,2240,1,0,0,0,348,2285,1,0,0,0,350,2291,1,0,0,0,352,2299,
        1,0,0,0,354,2301,1,0,0,0,356,2309,1,0,0,0,358,2317,1,0,0,0,360,2325,
        1,0,0,0,362,2329,1,0,0,0,364,2336,1,0,0,0,366,2344,1,0,0,0,368,2352,
        1,0,0,0,370,2362,1,0,0,0,372,2370,1,0,0,0,374,2379,1,0,0,0,376,2390,
        1,0,0,0,378,2402,1,0,0,0,380,2404,1,0,0,0,382,2412,1,0,0,0,384,2414,
        1,0,0,0,386,2416,1,0,0,0,388,2418,1,0,0,0,390,2422,1,0,0,0,392,394,
        3,52,26,0,393,392,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,
        1,0,0,0,396,398,1,0,0,0,397,395,1,0,0,0,398,399,5,0,0,1,399,1,1,
        0,0,0,400,401,3,338,169,0,401,402,5,88,0,0,402,403,3,4,2,0,403,3,
        1,0,0,0,404,408,5,128,0,0,405,407,3,6,3,0,406,405,1,0,0,0,407,410,
        1,0,0,0,408,406,1,0,0,0,408,409,1,0,0,0,409,411,1,0,0,0,410,408,
        1,0,0,0,411,429,5,129,0,0,412,416,5,126,0,0,413,415,3,6,3,0,414,
        413,1,0,0,0,415,418,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,
        419,1,0,0,0,418,416,1,0,0,0,419,429,5,127,0,0,420,424,5,124,0,0,
        421,423,3,6,3,0,422,421,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,
        424,425,1,0,0,0,425,427,1,0,0,0,426,424,1,0,0,0,427,429,5,125,0,
        0,428,404,1,0,0,0,428,412,1,0,0,0,428,420,1,0,0,0,429,5,1,0,0,0,
        430,432,3,8,4,0,431,430,1,0,0,0,432,433,1,0,0,0,433,431,1,0,0,0,
        433,434,1,0,0,0,434,437,1,0,0,0,435,437,3,4,2,0,436,431,1,0,0,0,
        436,435,1,0,0,0,437,7,1,0,0,0,438,444,3,382,191,0,439,444,3,384,
        192,0,440,444,3,386,193,0,441,444,3,30,15,0,442,444,5,122,0,0,443,
        438,1,0,0,0,443,439,1,0,0,0,443,440,1,0,0,0,443,441,1,0,0,0,443,
        442,1,0,0,0,444,9,1,0,0,0,445,446,3,338,169,0,446,447,5,88,0,0,447,
        451,5,128,0,0,448,450,3,6,3,0,449,448,1,0,0,0,450,453,1,0,0,0,451,
        449,1,0,0,0,451,452,1,0,0,0,452,454,1,0,0,0,453,451,1,0,0,0,454,
        455,5,129,0,0,455,456,5,116,0,0,456,481,1,0,0,0,457,458,3,338,169,
        0,458,459,5,88,0,0,459,463,5,126,0,0,460,462,3,6,3,0,461,460,1,0,
        0,0,462,465,1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,466,1,0,
        0,0,465,463,1,0,0,0,466,467,5,127,0,0,467,468,5,116,0,0,468,481,
        1,0,0,0,469,470,3,338,169,0,470,471,5,88,0,0,471,475,5,124,0,0,472,
        474,3,6,3,0,473,472,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,
        476,1,0,0,0,476,478,1,0,0,0,477,475,1,0,0,0,478,479,5,125,0,0,479,
        481,1,0,0,0,480,445,1,0,0,0,480,457,1,0,0,0,480,469,1,0,0,0,481,
        11,1,0,0,0,482,483,5,54,0,0,483,484,5,88,0,0,484,485,3,378,189,0,
        485,486,3,14,7,0,486,13,1,0,0,0,487,488,5,128,0,0,488,489,3,16,8,
        0,489,490,5,129,0,0,490,491,5,116,0,0,491,502,1,0,0,0,492,493,5,
        126,0,0,493,494,3,16,8,0,494,495,5,127,0,0,495,496,5,116,0,0,496,
        502,1,0,0,0,497,498,5,124,0,0,498,499,3,16,8,0,499,500,5,125,0,0,
        500,502,1,0,0,0,501,487,1,0,0,0,501,492,1,0,0,0,501,497,1,0,0,0,
        502,15,1,0,0,0,503,508,3,18,9,0,504,505,5,116,0,0,505,507,3,18,9,
        0,506,504,1,0,0,0,507,510,1,0,0,0,508,506,1,0,0,0,508,509,1,0,0,
        0,509,512,1,0,0,0,510,508,1,0,0,0,511,513,5,116,0,0,512,511,1,0,
        0,0,512,513,1,0,0,0,513,17,1,0,0,0,514,515,3,20,10,0,515,516,5,120,
        0,0,516,517,3,32,16,0,517,19,1,0,0,0,518,522,5,128,0,0,519,521,3,
        22,11,0,520,519,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,523,
        1,0,0,0,523,525,1,0,0,0,524,522,1,0,0,0,525,543,5,129,0,0,526,530,
        5,126,0,0,527,529,3,22,11,0,528,527,1,0,0,0,529,532,1,0,0,0,530,
        528,1,0,0,0,530,531,1,0,0,0,531,533,1,0,0,0,532,530,1,0,0,0,533,
        543,5,127,0,0,534,538,5,124,0,0,535,537,3,22,11,0,536,535,1,0,0,
        0,537,540,1,0,0,0,538,536,1,0,0,0,538,539,1,0,0,0,539,541,1,0,0,
        0,540,538,1,0,0,0,541,543,5,125,0,0,542,518,1,0,0,0,542,526,1,0,
        0,0,542,534,1,0,0,0,543,21,1,0,0,0,544,546,3,24,12,0,545,544,1,0,
        0,0,546,547,1,0,0,0,547,545,1,0,0,0,547,548,1,0,0,0,548,571,1,0,
        0,0,549,571,3,20,10,0,550,553,5,122,0,0,551,554,3,378,189,0,552,
        554,5,24,0,0,553,551,1,0,0,0,553,552,1,0,0,0,554,555,1,0,0,0,555,
        556,5,117,0,0,556,571,3,26,13,0,557,558,5,122,0,0,558,560,5,128,
        0,0,559,561,3,22,11,0,560,559,1,0,0,0,561,562,1,0,0,0,562,560,1,
        0,0,0,562,563,1,0,0,0,563,564,1,0,0,0,564,566,5,129,0,0,565,567,
        3,28,14,0,566,565,1,0,0,0,566,567,1,0,0,0,567,568,1,0,0,0,568,569,
        3,30,15,0,569,571,1,0,0,0,570,545,1,0,0,0,570,549,1,0,0,0,570,550,
        1,0,0,0,570,557,1,0,0,0,571,23,1,0,0,0,572,577,3,382,191,0,573,577,
        3,384,192,0,574,577,3,386,193,0,575,577,3,30,15,0,576,572,1,0,0,
        0,576,573,1,0,0,0,576,574,1,0,0,0,576,575,1,0,0,0,577,25,1,0,0,0,
        578,579,3,378,189,0,579,27,1,0,0,0,580,585,3,382,191,0,581,585,3,
        384,192,0,582,585,3,386,193,0,583,585,5,122,0,0,584,580,1,0,0,0,
        584,581,1,0,0,0,584,582,1,0,0,0,584,583,1,0,0,0,585,29,1,0,0,0,586,
        587,7,0,0,0,587,31,1,0,0,0,588,589,3,4,2,0,589,33,1,0,0,0,590,592,
        3,142,71,0,591,590,1,0,0,0,592,595,1,0,0,0,593,591,1,0,0,0,593,594,
        1,0,0,0,594,598,1,0,0,0,595,593,1,0,0,0,596,599,3,36,18,0,597,599,
        3,38,19,0,598,596,1,0,0,0,598,597,1,0,0,0,599,35,1,0,0,0,600,602,
        3,376,188,0,601,600,1,0,0,0,601,602,1,0,0,0,602,616,1,0,0,0,603,
        617,3,40,20,0,604,617,3,42,21,0,605,617,3,48,24,0,606,617,3,52,26,
        0,607,617,3,72,36,0,608,617,3,74,37,0,609,617,3,88,44,0,610,617,
        3,100,50,0,611,617,3,102,51,0,612,617,3,104,52,0,613,617,3,106,53,
        0,614,617,3,108,54,0,615,617,3,114,57,0,616,603,1,0,0,0,616,604,
        1,0,0,0,616,605,1,0,0,0,616,606,1,0,0,0,616,607,1,0,0,0,616,608,
        1,0,0,0,616,609,1,0,0,0,616,610,1,0,0,0,616,611,1,0,0,0,616,612,
        1,0,0,0,616,613,1,0,0,0,616,614,1,0,0,0,616,615,1,0,0,0,617,37,1,
        0,0,0,618,621,3,10,5,0,619,621,3,12,6,0,620,618,1,0,0,0,620,619,
        1,0,0,0,621,39,1,0,0,0,622,624,5,32,0,0,623,622,1,0,0,0,623,624,
        1,0,0,0,624,625,1,0,0,0,625,626,5,18,0,0,626,642,3,378,189,0,627,
        643,5,116,0,0,628,632,5,124,0,0,629,631,3,140,70,0,630,629,1,0,0,
        0,631,634,1,0,0,0,632,630,1,0,0,0,632,633,1,0,0,0,633,638,1,0,0,
        0,634,632,1,0,0,0,635,637,3,34,17,0,636,635,1,0,0,0,637,640,1,0,
        0,0,638,636,1,0,0,0,638,639,1,0,0,0,639,641,1,0,0,0,640,638,1,0,
        0,0,641,643,5,125,0,0,642,627,1,0,0,0,642,628,1,0,0,0,643,41,1,0,
        0,0,644,645,5,8,0,0,645,646,5,5,0,0,646,648,3,44,22,0,647,649,3,
        46,23,0,648,647,1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,650,651,
        5,116,0,0,651,43,1,0,0,0,652,655,3,378,189,0,653,655,5,24,0,0,654,
        652,1,0,0,0,654,653,1,0,0,0,655,45,1,0,0,0,656,659,5,1,0,0,657,660,
        3,378,189,0,658,660,5,110,0,0,659,657,1,0,0,0,659,658,1,0,0,0,660,
        47,1,0,0,0,661,662,5,33,0,0,662,663,3,50,25,0,663,664,5,116,0,0,
        664,49,1,0,0,0,665,667,3,338,169,0,666,665,1,0,0,0,666,667,1,0,0,
        0,667,668,1,0,0,0,668,670,5,118,0,0,669,666,1,0,0,0,669,670,1,0,
        0,0,670,687,1,0,0,0,671,688,5,84,0,0,672,684,5,124,0,0,673,678,3,
        50,25,0,674,675,5,115,0,0,675,677,3,50,25,0,676,674,1,0,0,0,677,
        680,1,0,0,0,678,676,1,0,0,0,678,679,1,0,0,0,679,682,1,0,0,0,680,
        678,1,0,0,0,681,683,5,115,0,0,682,681,1,0,0,0,682,683,1,0,0,0,683,
        685,1,0,0,0,684,673,1,0,0,0,684,685,1,0,0,0,685,686,1,0,0,0,686,
        688,5,125,0,0,687,671,1,0,0,0,687,672,1,0,0,0,688,698,1,0,0,0,689,
        695,3,338,169,0,690,693,5,1,0,0,691,694,3,378,189,0,692,694,5,110,
        0,0,693,691,1,0,0,0,693,692,1,0,0,0,694,696,1,0,0,0,695,690,1,0,
        0,0,695,696,1,0,0,0,696,698,1,0,0,0,697,669,1,0,0,0,697,689,1,0,
        0,0,698,51,1,0,0,0,699,700,5,10,0,0,700,701,3,378,189,0,701,703,
        5,128,0,0,702,704,3,58,29,0,703,702,1,0,0,0,703,704,1,0,0,0,704,
        705,1,0,0,0,705,707,5,129,0,0,706,708,3,70,35,0,707,706,1,0,0,0,
        707,708,1,0,0,0,708,709,1,0,0,0,709,710,3,166,83,0,710,53,1,0,0,
        0,711,713,5,3,0,0,712,711,1,0,0,0,712,713,1,0,0,0,713,715,1,0,0,
        0,714,716,5,36,0,0,715,714,1,0,0,0,715,716,1,0,0,0,716,718,1,0,0,
        0,717,719,5,32,0,0,718,717,1,0,0,0,718,719,1,0,0,0,719,724,1,0,0,
        0,720,722,5,8,0,0,721,723,3,56,28,0,722,721,1,0,0,0,722,723,1,0,
        0,0,723,725,1,0,0,0,724,720,1,0,0,0,724,725,1,0,0,0,725,55,1,0,0,
        0,726,727,7,1,0,0,727,57,1,0,0,0,728,733,3,66,33,0,729,730,5,115,
        0,0,730,732,3,66,33,0,731,729,1,0,0,0,732,735,1,0,0,0,733,731,1,
        0,0,0,733,734,1,0,0,0,734,737,1,0,0,0,735,733,1,0,0,0,736,738,5,
        115,0,0,737,736,1,0,0,0,737,738,1,0,0,0,738,59,1,0,0,0,739,741,3,
        142,71,0,740,739,1,0,0,0,741,744,1,0,0,0,742,740,1,0,0,0,742,743,
        1,0,0,0,743,747,1,0,0,0,744,742,1,0,0,0,745,748,3,62,31,0,746,748,
        3,64,32,0,747,745,1,0,0,0,747,746,1,0,0,0,748,61,1,0,0,0,749,751,
        5,89,0,0,750,752,3,336,168,0,751,750,1,0,0,0,751,752,1,0,0,0,752,
        754,1,0,0,0,753,749,1,0,0,0,753,754,1,0,0,0,754,756,1,0,0,0,755,
        757,5,20,0,0,756,755,1,0,0,0,756,757,1,0,0,0,757,758,1,0,0,0,758,
        759,5,24,0,0,759,63,1,0,0,0,760,762,5,20,0,0,761,760,1,0,0,0,761,
        762,1,0,0,0,762,763,1,0,0,0,763,764,5,24,0,0,764,765,5,117,0,0,765,
        766,3,284,142,0,766,65,1,0,0,0,767,768,3,378,189,0,768,769,5,117,
        0,0,769,770,3,284,142,0,770,67,1,0,0,0,771,772,3,240,120,0,772,775,
        5,117,0,0,773,776,3,284,142,0,774,776,5,113,0,0,775,773,1,0,0,0,
        775,774,1,0,0,0,776,69,1,0,0,0,777,778,5,119,0,0,778,779,3,284,142,
        0,779,71,1,0,0,0,780,781,5,31,0,0,781,783,3,378,189,0,782,784,3,
        118,59,0,783,782,1,0,0,0,783,784,1,0,0,0,784,786,1,0,0,0,785,787,
        3,128,64,0,786,785,1,0,0,0,786,787,1,0,0,0,787,790,1,0,0,0,788,789,
        5,102,0,0,789,791,3,284,142,0,790,788,1,0,0,0,790,791,1,0,0,0,791,
        792,1,0,0,0,792,793,5,116,0,0,793,73,1,0,0,0,794,797,3,76,38,0,795,
        797,3,78,39,0,796,794,1,0,0,0,796,795,1,0,0,0,797,75,1,0,0,0,798,
        799,5,27,0,0,799,801,3,378,189,0,800,802,3,118,59,0,801,800,1,0,
        0,0,801,802,1,0,0,0,802,804,1,0,0,0,803,805,3,128,64,0,804,803,1,
        0,0,0,804,805,1,0,0,0,805,812,1,0,0,0,806,808,5,124,0,0,807,809,
        3,80,40,0,808,807,1,0,0,0,808,809,1,0,0,0,809,810,1,0,0,0,810,813,
        5,125,0,0,811,813,5,116,0,0,812,806,1,0,0,0,812,811,1,0,0,0,813,
        77,1,0,0,0,814,815,5,27,0,0,815,817,3,378,189,0,816,818,3,118,59,
        0,817,816,1,0,0,0,817,818,1,0,0,0,818,819,1,0,0,0,819,821,5,128,
        0,0,820,822,3,84,42,0,821,820,1,0,0,0,821,822,1,0,0,0,822,823,1,
        0,0,0,823,825,5,129,0,0,824,826,3,128,64,0,825,824,1,0,0,0,825,826,
        1,0,0,0,826,827,1,0,0,0,827,828,5,116,0,0,828,79,1,0,0,0,829,834,
        3,82,41,0,830,831,5,115,0,0,831,833,3,82,41,0,832,830,1,0,0,0,833,
        836,1,0,0,0,834,832,1,0,0,0,834,835,1,0,0,0,835,838,1,0,0,0,836,
        834,1,0,0,0,837,839,5,115,0,0,838,837,1,0,0,0,838,839,1,0,0,0,839,
        81,1,0,0,0,840,842,3,142,71,0,841,840,1,0,0,0,842,845,1,0,0,0,843,
        841,1,0,0,0,843,844,1,0,0,0,844,847,1,0,0,0,845,843,1,0,0,0,846,
        848,3,376,188,0,847,846,1,0,0,0,847,848,1,0,0,0,848,849,1,0,0,0,
        849,850,3,378,189,0,850,851,5,117,0,0,851,852,3,284,142,0,852,83,
        1,0,0,0,853,858,3,86,43,0,854,855,5,115,0,0,855,857,3,86,43,0,856,
        854,1,0,0,0,857,860,1,0,0,0,858,856,1,0,0,0,858,859,1,0,0,0,859,
        862,1,0,0,0,860,858,1,0,0,0,861,863,5,115,0,0,862,861,1,0,0,0,862,
        863,1,0,0,0,863,85,1,0,0,0,864,866,3,142,71,0,865,864,1,0,0,0,866,
        869,1,0,0,0,867,865,1,0,0,0,867,868,1,0,0,0,868,871,1,0,0,0,869,
        867,1,0,0,0,870,872,3,376,188,0,871,870,1,0,0,0,871,872,1,0,0,0,
        872,873,1,0,0,0,873,874,3,284,142,0,874,87,1,0,0,0,875,876,5,7,0,
        0,876,878,3,378,189,0,877,879,3,118,59,0,878,877,1,0,0,0,878,879,
        1,0,0,0,879,881,1,0,0,0,880,882,3,128,64,0,881,880,1,0,0,0,881,882,
        1,0,0,0,882,883,1,0,0,0,883,885,5,124,0,0,884,886,3,90,45,0,885,
        884,1,0,0,0,885,886,1,0,0,0,886,887,1,0,0,0,887,888,5,125,0,0,888,
        89,1,0,0,0,889,894,3,92,46,0,890,891,5,115,0,0,891,893,3,92,46,0,
        892,890,1,0,0,0,893,896,1,0,0,0,894,892,1,0,0,0,894,895,1,0,0,0,
        895,898,1,0,0,0,896,894,1,0,0,0,897,899,5,115,0,0,898,897,1,0,0,
        0,898,899,1,0,0,0,899,91,1,0,0,0,900,902,3,142,71,0,901,900,1,0,
        0,0,902,905,1,0,0,0,903,901,1,0,0,0,903,904,1,0,0,0,904,907,1,0,
        0,0,905,903,1,0,0,0,906,908,3,376,188,0,907,906,1,0,0,0,907,908,
        1,0,0,0,908,909,1,0,0,0,909,913,3,378,189,0,910,914,3,94,47,0,911,
        914,3,96,48,0,912,914,3,98,49,0,913,910,1,0,0,0,913,911,1,0,0,0,
        913,912,1,0,0,0,913,914,1,0,0,0,914,93,1,0,0,0,915,917,5,128,0,0,
        916,918,3,84,42,0,917,916,1,0,0,0,917,918,1,0,0,0,918,919,1,0,0,
        0,919,920,5,129,0,0,920,95,1,0,0,0,921,923,5,124,0,0,922,924,3,80,
        40,0,923,922,1,0,0,0,923,924,1,0,0,0,924,925,1,0,0,0,925,926,5,125,
        0,0,926,97,1,0,0,0,927,928,5,102,0,0,928,929,3,154,77,0,929,99,1,
        0,0,0,930,931,5,52,0,0,931,933,3,378,189,0,932,934,3,118,59,0,933,
        932,1,0,0,0,933,934,1,0,0,0,934,936,1,0,0,0,935,937,3,128,64,0,936,
        935,1,0,0,0,936,937,1,0,0,0,937,938,1,0,0,0,938,939,5,124,0,0,939,
        940,3,80,40,0,940,941,5,125,0,0,941,101,1,0,0,0,942,945,5,3,0,0,
        943,946,3,378,189,0,944,946,5,110,0,0,945,943,1,0,0,0,945,944,1,
        0,0,0,946,947,1,0,0,0,947,948,5,117,0,0,948,951,3,284,142,0,949,
        950,5,102,0,0,950,952,3,154,77,0,951,949,1,0,0,0,951,952,1,0,0,0,
        952,953,1,0,0,0,953,954,5,116,0,0,954,103,1,0,0,0,955,957,5,26,0,
        0,956,958,5,20,0,0,957,956,1,0,0,0,957,958,1,0,0,0,958,959,1,0,0,
        0,959,960,3,378,189,0,960,961,5,117,0,0,961,964,3,284,142,0,962,
        963,5,102,0,0,963,965,3,154,77,0,964,962,1,0,0,0,964,965,1,0,0,0,
        965,966,1,0,0,0,966,967,5,116,0,0,967,105,1,0,0,0,968,970,5,32,0,
        0,969,968,1,0,0,0,969,970,1,0,0,0,970,971,1,0,0,0,971,972,5,29,0,
        0,972,974,3,378,189,0,973,975,3,118,59,0,974,973,1,0,0,0,974,975,
        1,0,0,0,975,980,1,0,0,0,976,978,5,117,0,0,977,979,3,328,164,0,978,
        977,1,0,0,0,978,979,1,0,0,0,979,981,1,0,0,0,980,976,1,0,0,0,980,
        981,1,0,0,0,981,983,1,0,0,0,982,984,3,128,64,0,983,982,1,0,0,0,983,
        984,1,0,0,0,984,985,1,0,0,0,985,989,5,124,0,0,986,988,3,140,70,0,
        987,986,1,0,0,0,988,991,1,0,0,0,989,987,1,0,0,0,989,990,1,0,0,0,
        990,995,1,0,0,0,991,989,1,0,0,0,992,994,3,138,69,0,993,992,1,0,0,
        0,994,997,1,0,0,0,995,993,1,0,0,0,995,996,1,0,0,0,996,998,1,0,0,
        0,997,995,1,0,0,0,998,999,5,125,0,0,999,107,1,0,0,0,1000,1003,3,
        110,55,0,1001,1003,3,112,56,0,1002,1000,1,0,0,0,1002,1001,1,0,0,
        0,1003,109,1,0,0,0,1004,1006,5,13,0,0,1005,1007,3,118,59,0,1006,
        1005,1,0,0,0,1006,1007,1,0,0,0,1007,1008,1,0,0,0,1008,1010,3,284,
        142,0,1009,1011,3,128,64,0,1010,1009,1,0,0,0,1010,1011,1,0,0,0,1011,
        1012,1,0,0,0,1012,1016,5,124,0,0,1013,1015,3,140,70,0,1014,1013,
        1,0,0,0,1015,1018,1,0,0,0,1016,1014,1,0,0,0,1016,1017,1,0,0,0,1017,
        1022,1,0,0,0,1018,1016,1,0,0,0,1019,1021,3,138,69,0,1020,1019,1,
        0,0,0,1021,1024,1,0,0,0,1022,1020,1,0,0,0,1022,1023,1,0,0,0,1023,
        1025,1,0,0,0,1024,1022,1,0,0,0,1025,1026,5,125,0,0,1026,111,1,0,
        0,0,1027,1029,5,32,0,0,1028,1027,1,0,0,0,1028,1029,1,0,0,0,1029,
        1030,1,0,0,0,1030,1032,5,13,0,0,1031,1033,3,118,59,0,1032,1031,1,
        0,0,0,1032,1033,1,0,0,0,1033,1035,1,0,0,0,1034,1036,5,88,0,0,1035,
        1034,1,0,0,0,1035,1036,1,0,0,0,1036,1037,1,0,0,0,1037,1038,3,368,
        184,0,1038,1039,5,11,0,0,1039,1041,3,284,142,0,1040,1042,3,128,64,
        0,1041,1040,1,0,0,0,1041,1042,1,0,0,0,1042,1043,1,0,0,0,1043,1047,
        5,124,0,0,1044,1046,3,140,70,0,1045,1044,1,0,0,0,1046,1049,1,0,0,
        0,1047,1045,1,0,0,0,1047,1048,1,0,0,0,1048,1053,1,0,0,0,1049,1047,
        1,0,0,0,1050,1052,3,138,69,0,1051,1050,1,0,0,0,1052,1055,1,0,0,0,
        1053,1051,1,0,0,0,1053,1054,1,0,0,0,1054,1056,1,0,0,0,1055,1053,
        1,0,0,0,1056,1057,5,125,0,0,1057,113,1,0,0,0,1058,1060,5,32,0,0,
        1059,1058,1,0,0,0,1059,1060,1,0,0,0,1060,1061,1,0,0,0,1061,1063,
        5,8,0,0,1062,1064,3,56,28,0,1063,1062,1,0,0,0,1063,1064,1,0,0,0,
        1064,1065,1,0,0,0,1065,1069,5,124,0,0,1066,1068,3,140,70,0,1067,
        1066,1,0,0,0,1068,1071,1,0,0,0,1069,1067,1,0,0,0,1069,1070,1,0,0,
        0,1070,1075,1,0,0,0,1071,1069,1,0,0,0,1072,1074,3,116,58,0,1073,
        1072,1,0,0,0,1074,1077,1,0,0,0,1075,1073,1,0,0,0,1075,1076,1,0,0,
        0,1076,1078,1,0,0,0,1077,1075,1,0,0,0,1078,1079,5,125,0,0,1079,115,
        1,0,0,0,1080,1082,3,142,71,0,1081,1080,1,0,0,0,1082,1085,1,0,0,0,
        1083,1081,1,0,0,0,1083,1084,1,0,0,0,1084,1094,1,0,0,0,1085,1083,
        1,0,0,0,1086,1095,3,10,5,0,1087,1089,3,376,188,0,1088,1087,1,0,0,
        0,1088,1089,1,0,0,0,1089,1092,1,0,0,0,1090,1093,3,104,52,0,1091,
        1093,3,52,26,0,1092,1090,1,0,0,0,1092,1091,1,0,0,0,1093,1095,1,0,
        0,0,1094,1086,1,0,0,0,1094,1088,1,0,0,0,1095,117,1,0,0,0,1096,1109,
        5,106,0,0,1097,1098,3,120,60,0,1098,1099,5,115,0,0,1099,1101,1,0,
        0,0,1100,1097,1,0,0,0,1101,1104,1,0,0,0,1102,1100,1,0,0,0,1102,1103,
        1,0,0,0,1103,1105,1,0,0,0,1104,1102,1,0,0,0,1105,1107,3,120,60,0,
        1106,1108,5,115,0,0,1107,1106,1,0,0,0,1107,1108,1,0,0,0,1108,1110,
        1,0,0,0,1109,1102,1,0,0,0,1109,1110,1,0,0,0,1110,1111,1,0,0,0,1111,
        1112,5,105,0,0,1112,119,1,0,0,0,1113,1115,3,142,71,0,1114,1113,1,
        0,0,0,1115,1118,1,0,0,0,1116,1114,1,0,0,0,1116,1117,1,0,0,0,1117,
        1122,1,0,0,0,1118,1116,1,0,0,0,1119,1123,3,122,61,0,1120,1123,3,
        124,62,0,1121,1123,3,126,63,0,1122,1119,1,0,0,0,1122,1120,1,0,0,
        0,1122,1121,1,0,0,0,1123,121,1,0,0,0,1124,1126,3,142,71,0,1125,1124,
        1,0,0,0,1125,1126,1,0,0,0,1126,1127,1,0,0,0,1127,1130,5,81,0,0,1128,
        1129,5,117,0,0,1129,1131,3,334,167,0,1130,1128,1,0,0,0,1130,1131,
        1,0,0,0,1131,123,1,0,0,0,1132,1134,3,142,71,0,1133,1132,1,0,0,0,
        1133,1134,1,0,0,0,1134,1135,1,0,0,0,1135,1140,3,378,189,0,1136,1138,
        5,117,0,0,1137,1139,3,328,164,0,1138,1137,1,0,0,0,1138,1139,1,0,
        0,0,1139,1141,1,0,0,0,1140,1136,1,0,0,0,1140,1141,1,0,0,0,1141,1144,
        1,0,0,0,1142,1143,5,102,0,0,1143,1145,3,284,142,0,1144,1142,1,0,
        0,0,1144,1145,1,0,0,0,1145,125,1,0,0,0,1146,1147,5,3,0,0,1147,1148,
        3,378,189,0,1148,1149,5,117,0,0,1149,1150,3,284,142,0,1150,127,1,
        0,0,0,1151,1157,5,34,0,0,1152,1153,3,130,65,0,1153,1154,5,115,0,
        0,1154,1156,1,0,0,0,1155,1152,1,0,0,0,1156,1159,1,0,0,0,1157,1155,
        1,0,0,0,1157,1158,1,0,0,0,1158,1161,1,0,0,0,1159,1157,1,0,0,0,1160,
        1162,3,130,65,0,1161,1160,1,0,0,0,1161,1162,1,0,0,0,1162,129,1,0,
        0,0,1163,1166,3,132,66,0,1164,1166,3,134,67,0,1165,1163,1,0,0,0,
        1165,1164,1,0,0,0,1166,131,1,0,0,0,1167,1168,3,336,168,0,1168,1169,
        5,117,0,0,1169,1170,3,334,167,0,1170,133,1,0,0,0,1171,1173,3,136,
        68,0,1172,1171,1,0,0,0,1172,1173,1,0,0,0,1173,1174,1,0,0,0,1174,
        1175,3,284,142,0,1175,1177,5,117,0,0,1176,1178,3,328,164,0,1177,
        1176,1,0,0,0,1177,1178,1,0,0,0,1178,135,1,0,0,0,1179,1180,5,11,0,
        0,1180,1181,3,118,59,0,1181,137,1,0,0,0,1182,1184,3,142,71,0,1183,
        1182,1,0,0,0,1184,1187,1,0,0,0,1185,1183,1,0,0,0,1185,1186,1,0,0,
        0,1186,1197,1,0,0,0,1187,1185,1,0,0,0,1188,1198,3,10,5,0,1189,1191,
        3,376,188,0,1190,1189,1,0,0,0,1190,1191,1,0,0,0,1191,1195,1,0,0,
        0,1192,1196,3,72,36,0,1193,1196,3,102,51,0,1194,1196,3,52,26,0,1195,
        1192,1,0,0,0,1195,1193,1,0,0,0,1195,1194,1,0,0,0,1196,1198,1,0,0,
        0,1197,1188,1,0,0,0,1197,1190,1,0,0,0,1198,139,1,0,0,0,1199,1200,
        5,121,0,0,1200,1201,5,88,0,0,1201,1202,5,126,0,0,1202,1203,3,144,
        72,0,1203,1204,5,127,0,0,1204,141,1,0,0,0,1205,1206,5,121,0,0,1206,
        1207,5,126,0,0,1207,1208,3,144,72,0,1208,1209,5,127,0,0,1209,143,
        1,0,0,0,1210,1212,3,338,169,0,1211,1213,3,146,73,0,1212,1211,1,0,
        0,0,1212,1213,1,0,0,0,1213,145,1,0,0,0,1214,1218,3,4,2,0,1215,1216,
        5,102,0,0,1216,1218,3,162,81,0,1217,1214,1,0,0,0,1217,1215,1,0,0,
        0,1218,147,1,0,0,0,1219,1224,5,116,0,0,1220,1224,3,52,26,0,1221,
        1224,3,150,75,0,1222,1224,3,152,76,0,1223,1219,1,0,0,0,1223,1220,
        1,0,0,0,1223,1221,1,0,0,0,1223,1222,1,0,0,0,1224,149,1,0,0,0,1225,
        1226,5,15,0,0,1226,1227,3,248,124,0,1227,1228,5,117,0,0,1228,1229,
        3,284,142,0,1229,1232,1,0,0,0,1230,1231,5,102,0,0,1231,1233,3,154,
        77,0,1232,1230,1,0,0,0,1232,1233,1,0,0,0,1233,1234,1,0,0,0,1234,
        1235,5,116,0,0,1235,151,1,0,0,0,1236,1237,3,154,77,0,1237,1238,5,
        116,0,0,1238,1244,1,0,0,0,1239,1241,3,160,80,0,1240,1242,5,116,0,
        0,1241,1240,1,0,0,0,1241,1242,1,0,0,0,1242,1244,1,0,0,0,1243,1236,
        1,0,0,0,1243,1239,1,0,0,0,1244,153,1,0,0,0,1245,1247,6,77,-1,0,1246,
        1248,3,142,71,0,1247,1246,1,0,0,0,1248,1249,1,0,0,0,1249,1247,1,
        0,0,0,1249,1250,1,0,0,0,1250,1251,1,0,0,0,1251,1252,3,154,77,40,
        1252,1326,1,0,0,0,1253,1326,3,162,81,0,1254,1326,3,164,82,0,1255,
        1257,5,89,0,0,1256,1258,5,20,0,0,1257,1256,1,0,0,0,1257,1258,1,0,
        0,0,1258,1259,1,0,0,0,1259,1326,3,154,77,30,1260,1261,5,84,0,0,1261,
        1326,3,154,77,29,1262,1263,7,2,0,0,1263,1326,3,154,77,28,1264,1266,
        5,112,0,0,1265,1267,3,154,77,0,1266,1265,1,0,0,0,1266,1267,1,0,0,
        0,1267,1326,1,0,0,0,1268,1269,5,114,0,0,1269,1326,3,154,77,15,1270,
        1272,5,4,0,0,1271,1273,5,81,0,0,1272,1271,1,0,0,0,1272,1273,1,0,
        0,0,1273,1275,1,0,0,0,1274,1276,3,154,77,0,1275,1274,1,0,0,0,1275,
        1276,1,0,0,0,1276,1326,1,0,0,0,1277,1279,5,2,0,0,1278,1280,5,81,
        0,0,1279,1278,1,0,0,0,1279,1280,1,0,0,0,1280,1282,1,0,0,0,1281,1283,
        3,154,77,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,1283,1326,1,0,0,0,
        1284,1286,5,23,0,0,1285,1287,3,154,77,0,1286,1285,1,0,0,0,1286,1287,
        1,0,0,0,1287,1326,1,0,0,0,1288,1292,5,128,0,0,1289,1291,3,140,70,
        0,1290,1289,1,0,0,0,1291,1294,1,0,0,0,1292,1290,1,0,0,0,1292,1293,
        1,0,0,0,1293,1295,1,0,0,0,1294,1292,1,0,0,0,1295,1296,3,154,77,0,
        1296,1297,5,129,0,0,1297,1326,1,0,0,0,1298,1302,5,126,0,0,1299,1301,
        3,140,70,0,1300,1299,1,0,0,0,1301,1304,1,0,0,0,1302,1300,1,0,0,0,
        1302,1303,1,0,0,0,1303,1306,1,0,0,0,1304,1302,1,0,0,0,1305,1307,
        3,174,87,0,1306,1305,1,0,0,0,1306,1307,1,0,0,0,1307,1308,1,0,0,0,
        1308,1326,5,127,0,0,1309,1313,5,128,0,0,1310,1312,3,140,70,0,1311,
        1310,1,0,0,0,1312,1315,1,0,0,0,1313,1311,1,0,0,0,1313,1314,1,0,0,
        0,1314,1317,1,0,0,0,1315,1313,1,0,0,0,1316,1318,3,176,88,0,1317,
        1316,1,0,0,0,1317,1318,1,0,0,0,1318,1319,1,0,0,0,1319,1326,5,129,
        0,0,1320,1326,3,180,90,0,1321,1326,3,194,97,0,1322,1326,3,208,104,
        0,1323,1326,3,160,80,0,1324,1326,3,2,1,0,1325,1245,1,0,0,0,1325,
        1253,1,0,0,0,1325,1254,1,0,0,0,1325,1255,1,0,0,0,1325,1260,1,0,0,
        0,1325,1262,1,0,0,0,1325,1264,1,0,0,0,1325,1268,1,0,0,0,1325,1270,
        1,0,0,0,1325,1277,1,0,0,0,1325,1284,1,0,0,0,1325,1288,1,0,0,0,1325,
        1298,1,0,0,0,1325,1309,1,0,0,0,1325,1320,1,0,0,0,1325,1321,1,0,0,
        0,1325,1322,1,0,0,0,1325,1323,1,0,0,0,1325,1324,1,0,0,0,1326,1411,
        1,0,0,0,1327,1328,10,26,0,0,1328,1329,7,3,0,0,1329,1410,3,154,77,
        27,1330,1331,10,25,0,0,1331,1332,7,4,0,0,1332,1410,3,154,77,26,1333,
        1336,10,24,0,0,1334,1337,3,388,194,0,1335,1337,3,390,195,0,1336,
        1334,1,0,0,0,1336,1335,1,0,0,0,1337,1338,1,0,0,0,1338,1339,3,154,
        77,25,1339,1410,1,0,0,0,1340,1341,10,23,0,0,1341,1342,5,89,0,0,1342,
        1410,3,154,77,24,1343,1344,10,22,0,0,1344,1345,5,87,0,0,1345,1410,
        3,154,77,23,1346,1347,10,21,0,0,1347,1348,5,90,0,0,1348,1410,3,154,
        77,22,1349,1350,10,20,0,0,1350,1351,3,156,78,0,1351,1352,3,154,77,
        21,1352,1410,1,0,0,0,1353,1354,10,19,0,0,1354,1355,5,89,0,0,1355,
        1356,5,89,0,0,1356,1410,3,154,77,20,1357,1358,10,18,0,0,1358,1359,
        5,91,0,0,1359,1410,3,154,77,19,1360,1361,10,14,0,0,1361,1362,5,114,
        0,0,1362,1410,3,154,77,15,1363,1364,10,13,0,0,1364,1365,5,102,0,
        0,1365,1410,3,154,77,14,1366,1367,10,12,0,0,1367,1368,3,158,79,0,
        1368,1369,3,154,77,13,1369,1410,1,0,0,0,1370,1371,10,37,0,0,1371,
        1372,5,111,0,0,1372,1373,3,344,172,0,1373,1375,5,128,0,0,1374,1376,
        3,206,103,0,1375,1374,1,0,0,0,1375,1376,1,0,0,0,1376,1377,1,0,0,
        0,1377,1378,5,129,0,0,1378,1410,1,0,0,0,1379,1380,10,36,0,0,1380,
        1381,5,111,0,0,1381,1410,3,378,189,0,1382,1383,10,35,0,0,1383,1384,
        5,111,0,0,1384,1410,3,178,89,0,1385,1386,10,34,0,0,1386,1387,5,111,
        0,0,1387,1410,5,37,0,0,1388,1389,10,33,0,0,1389,1391,5,128,0,0,1390,
        1392,3,206,103,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,1392,1393,1,
        0,0,0,1393,1410,5,129,0,0,1394,1395,10,32,0,0,1395,1396,5,126,0,
        0,1396,1397,3,154,77,0,1397,1398,5,127,0,0,1398,1410,1,0,0,0,1399,
        1400,10,31,0,0,1400,1410,5,123,0,0,1401,1402,10,27,0,0,1402,1403,
        5,1,0,0,1403,1410,3,288,144,0,1404,1405,10,17,0,0,1405,1407,5,112,
        0,0,1406,1408,3,154,77,0,1407,1406,1,0,0,0,1407,1408,1,0,0,0,1408,
        1410,1,0,0,0,1409,1327,1,0,0,0,1409,1330,1,0,0,0,1409,1333,1,0,0,
        0,1409,1340,1,0,0,0,1409,1343,1,0,0,0,1409,1346,1,0,0,0,1409,1349,
        1,0,0,0,1409,1353,1,0,0,0,1409,1357,1,0,0,0,1409,1360,1,0,0,0,1409,
        1363,1,0,0,0,1409,1366,1,0,0,0,1409,1370,1,0,0,0,1409,1379,1,0,0,
        0,1409,1382,1,0,0,0,1409,1385,1,0,0,0,1409,1388,1,0,0,0,1409,1394,
        1,0,0,0,1409,1399,1,0,0,0,1409,1401,1,0,0,0,1409,1404,1,0,0,0,1410,
        1413,1,0,0,0,1411,1409,1,0,0,0,1411,1412,1,0,0,0,1412,155,1,0,0,
        0,1413,1411,1,0,0,0,1414,1415,7,5,0,0,1415,157,1,0,0,0,1416,1417,
        7,6,0,0,1417,159,1,0,0,0,1418,1420,3,142,71,0,1419,1418,1,0,0,0,
        1420,1421,1,0,0,0,1421,1419,1,0,0,0,1421,1422,1,0,0,0,1422,1423,
        1,0,0,0,1423,1424,3,160,80,0,1424,1433,1,0,0,0,1425,1433,3,166,83,
        0,1426,1433,3,170,85,0,1427,1433,3,172,86,0,1428,1433,3,214,107,
        0,1429,1433,3,226,113,0,1430,1433,3,228,114,0,1431,1433,3,230,115,
        0,1432,1419,1,0,0,0,1432,1425,1,0,0,0,1432,1426,1,0,0,0,1432,1427,
        1,0,0,0,1432,1428,1,0,0,0,1432,1429,1,0,0,0,1432,1430,1,0,0,0,1432,
        1431,1,0,0,0,1433,161,1,0,0,0,1434,1435,7,7,0,0,1435,163,1,0,0,0,
        1436,1439,3,342,171,0,1437,1439,3,362,181,0,1438,1436,1,0,0,0,1438,
        1437,1,0,0,0,1439,165,1,0,0,0,1440,1442,5,124,0,0,1441,1443,3,168,
        84,0,1442,1441,1,0,0,0,1442,1443,1,0,0,0,1443,1444,1,0,0,0,1444,
        1445,5,125,0,0,1445,167,1,0,0,0,1446,1448,3,148,74,0,1447,1446,1,
        0,0,0,1448,1449,1,0,0,0,1449,1447,1,0,0,0,1449,1450,1,0,0,0,1450,
        1452,1,0,0,0,1451,1453,3,154,77,0,1452,1451,1,0,0,0,1452,1453,1,
        0,0,0,1453,1456,1,0,0,0,1454,1456,3,154,77,0,1455,1447,1,0,0,0,1455,
        1454,1,0,0,0,1456,169,1,0,0,0,1457,1459,5,36,0,0,1458,1460,5,19,
        0,0,1459,1458,1,0,0,0,1459,1460,1,0,0,0,1460,1461,1,0,0,0,1461,1462,
        3,166,83,0,1462,171,1,0,0,0,1463,1464,5,32,0,0,1464,1465,3,166,83,
        0,1465,173,1,0,0,0,1466,1471,3,154,77,0,1467,1468,5,115,0,0,1468,
        1470,3,154,77,0,1469,1467,1,0,0,0,1470,1473,1,0,0,0,1471,1469,1,
        0,0,0,1471,1472,1,0,0,0,1472,1475,1,0,0,0,1473,1471,1,0,0,0,1474,
        1476,5,115,0,0,1475,1474,1,0,0,0,1475,1476,1,0,0,0,1476,1482,1,0,
        0,0,1477,1478,3,154,77,0,1478,1479,5,116,0,0,1479,1480,3,154,77,
        0,1480,1482,1,0,0,0,1481,1466,1,0,0,0,1481,1477,1,0,0,0,1482,175,
        1,0,0,0,1483,1484,3,154,77,0,1484,1485,5,115,0,0,1485,1487,1,0,0,
        0,1486,1483,1,0,0,0,1487,1488,1,0,0,0,1488,1486,1,0,0,0,1488,1489,
        1,0,0,0,1489,1491,1,0,0,0,1490,1492,3,154,77,0,1491,1490,1,0,0,0,
        1491,1492,1,0,0,0,1492,177,1,0,0,0,1493,1494,5,75,0,0,1494,179,1,
        0,0,0,1495,1499,3,182,91,0,1496,1499,3,190,95,0,1497,1499,3,192,
        96,0,1498,1495,1,0,0,0,1498,1496,1,0,0,0,1498,1497,1,0,0,0,1499,
        181,1,0,0,0,1500,1501,3,342,171,0,1501,1505,5,124,0,0,1502,1504,
        3,140,70,0,1503,1502,1,0,0,0,1504,1507,1,0,0,0,1505,1503,1,0,0,0,
        1505,1506,1,0,0,0,1506,1510,1,0,0,0,1507,1505,1,0,0,0,1508,1511,
        3,184,92,0,1509,1511,3,188,94,0,1510,1508,1,0,0,0,1510,1509,1,0,
        0,0,1510,1511,1,0,0,0,1511,1512,1,0,0,0,1512,1513,5,125,0,0,1513,
        183,1,0,0,0,1514,1519,3,186,93,0,1515,1516,5,115,0,0,1516,1518,3,
        186,93,0,1517,1515,1,0,0,0,1518,1521,1,0,0,0,1519,1517,1,0,0,0,1519,
        1520,1,0,0,0,1520,1527,1,0,0,0,1521,1519,1,0,0,0,1522,1523,5,115,
        0,0,1523,1528,3,188,94,0,1524,1526,5,115,0,0,1525,1524,1,0,0,0,1525,
        1526,1,0,0,0,1526,1528,1,0,0,0,1527,1522,1,0,0,0,1527,1525,1,0,0,
        0,1528,185,1,0,0,0,1529,1531,3,142,71,0,1530,1529,1,0,0,0,1531,1534,
        1,0,0,0,1532,1530,1,0,0,0,1532,1533,1,0,0,0,1533,1543,1,0,0,0,1534,
        1532,1,0,0,0,1535,1544,3,378,189,0,1536,1539,3,378,189,0,1537,1539,
        3,178,89,0,1538,1536,1,0,0,0,1538,1537,1,0,0,0,1539,1540,1,0,0,0,
        1540,1541,5,117,0,0,1541,1542,3,154,77,0,1542,1544,1,0,0,0,1543,
        1535,1,0,0,0,1543,1538,1,0,0,0,1544,187,1,0,0,0,1545,1546,5,112,
        0,0,1546,1547,3,154,77,0,1547,189,1,0,0,0,1548,1549,3,342,171,0,
        1549,1553,5,128,0,0,1550,1552,3,140,70,0,1551,1550,1,0,0,0,1552,
        1555,1,0,0,0,1553,1551,1,0,0,0,1553,1554,1,0,0,0,1554,1567,1,0,0,
        0,1555,1553,1,0,0,0,1556,1561,3,154,77,0,1557,1558,5,115,0,0,1558,
        1560,3,154,77,0,1559,1557,1,0,0,0,1560,1563,1,0,0,0,1561,1559,1,
        0,0,0,1561,1562,1,0,0,0,1562,1565,1,0,0,0,1563,1561,1,0,0,0,1564,
        1566,5,115,0,0,1565,1564,1,0,0,0,1565,1566,1,0,0,0,1566,1568,1,0,
        0,0,1567,1556,1,0,0,0,1567,1568,1,0,0,0,1568,1569,1,0,0,0,1569,1570,
        5,129,0,0,1570,191,1,0,0,0,1571,1572,3,342,171,0,1572,193,1,0,0,
        0,1573,1577,3,196,98,0,1574,1577,3,202,101,0,1575,1577,3,204,102,
        0,1576,1573,1,0,0,0,1576,1574,1,0,0,0,1576,1575,1,0,0,0,1577,195,
        1,0,0,0,1578,1579,3,342,171,0,1579,1581,5,124,0,0,1580,1582,3,198,
        99,0,1581,1580,1,0,0,0,1581,1582,1,0,0,0,1582,1583,1,0,0,0,1583,
        1584,5,125,0,0,1584,197,1,0,0,0,1585,1590,3,200,100,0,1586,1587,
        5,115,0,0,1587,1589,3,200,100,0,1588,1586,1,0,0,0,1589,1592,1,0,
        0,0,1590,1588,1,0,0,0,1590,1591,1,0,0,0,1591,1594,1,0,0,0,1592,1590,
        1,0,0,0,1593,1595,5,115,0,0,1594,1593,1,0,0,0,1594,1595,1,0,0,0,
        1595,199,1,0,0,0,1596,1605,3,378,189,0,1597,1600,3,378,189,0,1598,
        1600,3,178,89,0,1599,1597,1,0,0,0,1599,1598,1,0,0,0,1600,1601,1,
        0,0,0,1601,1602,5,117,0,0,1602,1603,3,154,77,0,1603,1605,1,0,0,0,
        1604,1596,1,0,0,0,1604,1599,1,0,0,0,1605,201,1,0,0,0,1606,1607,3,
        342,171,0,1607,1619,5,128,0,0,1608,1613,3,154,77,0,1609,1610,5,115,
        0,0,1610,1612,3,154,77,0,1611,1609,1,0,0,0,1612,1615,1,0,0,0,1613,
        1611,1,0,0,0,1613,1614,1,0,0,0,1614,1617,1,0,0,0,1615,1613,1,0,0,
        0,1616,1618,5,115,0,0,1617,1616,1,0,0,0,1617,1618,1,0,0,0,1618,1620,
        1,0,0,0,1619,1608,1,0,0,0,1619,1620,1,0,0,0,1620,1621,1,0,0,0,1621,
        1622,5,129,0,0,1622,203,1,0,0,0,1623,1624,3,342,171,0,1624,205,1,
        0,0,0,1625,1630,3,154,77,0,1626,1627,5,115,0,0,1627,1629,3,154,77,
        0,1628,1626,1,0,0,0,1629,1632,1,0,0,0,1630,1628,1,0,0,0,1630,1631,
        1,0,0,0,1631,1634,1,0,0,0,1632,1630,1,0,0,0,1633,1635,5,115,0,0,
        1634,1633,1,0,0,0,1634,1635,1,0,0,0,1635,207,1,0,0,0,1636,1638,5,
        19,0,0,1637,1636,1,0,0,0,1637,1638,1,0,0,0,1638,1645,1,0,0,0,1639,
        1646,5,91,0,0,1640,1642,5,90,0,0,1641,1643,3,210,105,0,1642,1641,
        1,0,0,0,1642,1643,1,0,0,0,1643,1644,1,0,0,0,1644,1646,5,90,0,0,1645,
        1639,1,0,0,0,1645,1640,1,0,0,0,1646,1652,1,0,0,0,1647,1653,3,154,
        77,0,1648,1649,5,119,0,0,1649,1650,3,288,144,0,1650,1651,3,166,83,
        0,1651,1653,1,0,0,0,1652,1647,1,0,0,0,1652,1648,1,0,0,0,1653,209,
        1,0,0,0,1654,1659,3,212,106,0,1655,1656,5,115,0,0,1656,1658,3,212,
        106,0,1657,1655,1,0,0,0,1658,1661,1,0,0,0,1659,1657,1,0,0,0,1659,
        1660,1,0,0,0,1660,1663,1,0,0,0,1661,1659,1,0,0,0,1662,1664,5,115,
        0,0,1663,1662,1,0,0,0,1663,1664,1,0,0,0,1664,211,1,0,0,0,1665,1667,
        3,142,71,0,1666,1665,1,0,0,0,1667,1670,1,0,0,0,1668,1666,1,0,0,0,
        1668,1669,1,0,0,0,1669,1671,1,0,0,0,1670,1668,1,0,0,0,1671,1674,
        3,240,120,0,1672,1673,5,117,0,0,1673,1675,3,284,142,0,1674,1672,
        1,0,0,0,1674,1675,1,0,0,0,1675,213,1,0,0,0,1676,1678,3,224,112,0,
        1677,1676,1,0,0,0,1677,1678,1,0,0,0,1678,1683,1,0,0,0,1679,1684,
        3,216,108,0,1680,1684,3,218,109,0,1681,1684,3,220,110,0,1682,1684,
        3,222,111,0,1683,1679,1,0,0,0,1683,1680,1,0,0,0,1683,1681,1,0,0,
        0,1683,1682,1,0,0,0,1684,215,1,0,0,0,1685,1686,5,16,0,0,1686,1687,
        3,166,83,0,1687,217,1,0,0,0,1688,1689,5,35,0,0,1689,1690,3,154,77,
        0,1690,1691,3,166,83,0,1691,219,1,0,0,0,1692,1693,5,35,0,0,1693,
        1694,5,15,0,0,1694,1695,3,240,120,0,1695,1696,5,102,0,0,1696,1697,
        3,154,77,0,1697,1698,3,166,83,0,1698,221,1,0,0,0,1699,1700,5,11,
        0,0,1700,1701,3,240,120,0,1701,1702,5,14,0,0,1702,1703,3,154,77,
        0,1703,1704,3,166,83,0,1704,223,1,0,0,0,1705,1706,5,81,0,0,1706,
        1707,5,117,0,0,1707,225,1,0,0,0,1708,1709,5,12,0,0,1709,1710,3,154,
        77,0,1710,1716,3,166,83,0,1711,1714,5,6,0,0,1712,1715,3,166,83,0,
        1713,1715,3,226,113,0,1714,1712,1,0,0,0,1714,1713,1,0,0,0,1715,1717,
        1,0,0,0,1716,1711,1,0,0,0,1716,1717,1,0,0,0,1717,227,1,0,0,0,1718,
        1719,5,12,0,0,1719,1720,5,15,0,0,1720,1721,3,240,120,0,1721,1722,
        5,102,0,0,1722,1723,3,154,77,0,1723,1730,3,166,83,0,1724,1728,5,
        6,0,0,1725,1729,3,166,83,0,1726,1729,3,226,113,0,1727,1729,3,228,
        114,0,1728,1725,1,0,0,0,1728,1726,1,0,0,0,1728,1727,1,0,0,0,1729,
        1731,1,0,0,0,1730,1724,1,0,0,0,1730,1731,1,0,0,0,1731,229,1,0,0,
        0,1732,1733,5,17,0,0,1733,1734,3,154,77,0,1734,1738,5,124,0,0,1735,
        1737,3,140,70,0,1736,1735,1,0,0,0,1737,1740,1,0,0,0,1738,1736,1,
        0,0,0,1738,1739,1,0,0,0,1739,1742,1,0,0,0,1740,1738,1,0,0,0,1741,
        1743,3,232,116,0,1742,1741,1,0,0,0,1742,1743,1,0,0,0,1743,1744,1,
        0,0,0,1744,1745,5,125,0,0,1745,231,1,0,0,0,1746,1747,3,236,118,0,
        1747,1748,5,120,0,0,1748,1749,3,234,117,0,1749,1751,1,0,0,0,1750,
        1746,1,0,0,0,1751,1754,1,0,0,0,1752,1750,1,0,0,0,1752,1753,1,0,0,
        0,1753,1755,1,0,0,0,1754,1752,1,0,0,0,1755,1756,3,236,118,0,1756,
        1757,5,120,0,0,1757,1759,3,154,77,0,1758,1760,5,115,0,0,1759,1758,
        1,0,0,0,1759,1760,1,0,0,0,1760,233,1,0,0,0,1761,1762,3,154,77,0,
        1762,1763,5,115,0,0,1763,1769,1,0,0,0,1764,1766,3,160,80,0,1765,
        1767,5,115,0,0,1766,1765,1,0,0,0,1766,1767,1,0,0,0,1767,1769,1,0,
        0,0,1768,1761,1,0,0,0,1768,1764,1,0,0,0,1769,235,1,0,0,0,1770,1772,
        3,142,71,0,1771,1770,1,0,0,0,1772,1775,1,0,0,0,1773,1771,1,0,0,0,
        1773,1774,1,0,0,0,1774,1776,1,0,0,0,1775,1773,1,0,0,0,1776,1778,
        3,240,120,0,1777,1779,3,238,119,0,1778,1777,1,0,0,0,1778,1779,1,
        0,0,0,1779,237,1,0,0,0,1780,1781,5,12,0,0,1781,1782,3,154,77,0,1782,
        239,1,0,0,0,1783,1785,5,90,0,0,1784,1783,1,0,0,0,1784,1785,1,0,0,
        0,1785,1786,1,0,0,0,1786,1791,3,242,121,0,1787,1788,5,90,0,0,1788,
        1790,3,242,121,0,1789,1787,1,0,0,0,1790,1793,1,0,0,0,1791,1789,1,
        0,0,0,1791,1792,1,0,0,0,1792,241,1,0,0,0,1793,1791,1,0,0,0,1794,
        1797,3,244,122,0,1795,1797,3,254,127,0,1796,1794,1,0,0,0,1796,1795,
        1,0,0,0,1797,243,1,0,0,0,1798,1810,3,246,123,0,1799,1810,3,248,124,
        0,1800,1810,3,250,125,0,1801,1810,3,252,126,0,1802,1810,3,258,129,
        0,1803,1810,3,268,134,0,1804,1810,3,272,136,0,1805,1810,3,276,138,
        0,1806,1810,3,278,139,0,1807,1810,3,282,141,0,1808,1810,3,2,1,0,
        1809,1798,1,0,0,0,1809,1799,1,0,0,0,1809,1800,1,0,0,0,1809,1801,
        1,0,0,0,1809,1802,1,0,0,0,1809,1803,1,0,0,0,1809,1804,1,0,0,0,1809,
        1805,1,0,0,0,1809,1806,1,0,0,0,1809,1807,1,0,0,0,1809,1808,1,0,0,
        0,1810,245,1,0,0,0,1811,1828,5,30,0,0,1812,1828,5,9,0,0,1813,1828,
        5,69,0,0,1814,1828,5,72,0,0,1815,1828,5,70,0,0,1816,1828,5,71,0,
        0,1817,1828,5,73,0,0,1818,1828,5,74,0,0,1819,1821,5,83,0,0,1820,
        1819,1,0,0,0,1820,1821,1,0,0,0,1821,1822,1,0,0,0,1822,1828,5,75,
        0,0,1823,1825,5,83,0,0,1824,1823,1,0,0,0,1824,1825,1,0,0,0,1825,
        1826,1,0,0,0,1826,1828,5,80,0,0,1827,1811,1,0,0,0,1827,1812,1,0,
        0,0,1827,1813,1,0,0,0,1827,1814,1,0,0,0,1827,1815,1,0,0,0,1827,1816,
        1,0,0,0,1827,1817,1,0,0,0,1827,1818,1,0,0,0,1827,1820,1,0,0,0,1827,
        1824,1,0,0,0,1828,247,1,0,0,0,1829,1831,5,22,0,0,1830,1829,1,0,0,
        0,1830,1831,1,0,0,0,1831,1833,1,0,0,0,1832,1834,5,20,0,0,1833,1832,
        1,0,0,0,1833,1834,1,0,0,0,1834,1835,1,0,0,0,1835,1838,3,378,189,
        0,1836,1837,5,109,0,0,1837,1839,3,240,120,0,1838,1836,1,0,0,0,1838,
        1839,1,0,0,0,1839,249,1,0,0,0,1840,1841,5,110,0,0,1841,251,1,0,0,
        0,1842,1843,5,112,0,0,1843,253,1,0,0,0,1844,1845,3,256,128,0,1845,
        1846,5,114,0,0,1846,1847,3,256,128,0,1847,1856,1,0,0,0,1848,1849,
        3,256,128,0,1849,1850,5,112,0,0,1850,1856,1,0,0,0,1851,1852,3,256,
        128,0,1852,1853,5,113,0,0,1853,1854,3,256,128,0,1854,1856,1,0,0,
        0,1855,1844,1,0,0,0,1855,1848,1,0,0,0,1855,1851,1,0,0,0,1856,255,
        1,0,0,0,1857,1869,5,69,0,0,1858,1869,5,72,0,0,1859,1861,5,83,0,0,
        1860,1859,1,0,0,0,1860,1861,1,0,0,0,1861,1862,1,0,0,0,1862,1869,
        5,75,0,0,1863,1865,5,83,0,0,1864,1863,1,0,0,0,1864,1865,1,0,0,0,
        1865,1866,1,0,0,0,1866,1869,5,80,0,0,1867,1869,3,282,141,0,1868,
        1857,1,0,0,0,1868,1858,1,0,0,0,1868,1860,1,0,0,0,1868,1864,1,0,0,
        0,1868,1867,1,0,0,0,1869,257,1,0,0,0,1870,1871,3,342,171,0,1871,
        1873,5,124,0,0,1872,1874,3,260,130,0,1873,1872,1,0,0,0,1873,1874,
        1,0,0,0,1874,1875,1,0,0,0,1875,1876,5,125,0,0,1876,259,1,0,0,0,1877,
        1882,3,262,131,0,1878,1880,5,115,0,0,1879,1881,3,266,133,0,1880,
        1879,1,0,0,0,1880,1881,1,0,0,0,1881,1883,1,0,0,0,1882,1878,1,0,0,
        0,1882,1883,1,0,0,0,1883,1886,1,0,0,0,1884,1886,3,266,133,0,1885,
        1877,1,0,0,0,1885,1884,1,0,0,0,1886,261,1,0,0,0,1887,1892,3,264,
        132,0,1888,1889,5,115,0,0,1889,1891,3,264,132,0,1890,1888,1,0,0,
        0,1891,1894,1,0,0,0,1892,1890,1,0,0,0,1892,1893,1,0,0,0,1893,263,
        1,0,0,0,1894,1892,1,0,0,0,1895,1897,3,142,71,0,1896,1895,1,0,0,0,
        1897,1900,1,0,0,0,1898,1896,1,0,0,0,1898,1899,1,0,0,0,1899,1916,
        1,0,0,0,1900,1898,1,0,0,0,1901,1902,3,178,89,0,1902,1903,5,117,0,
        0,1903,1904,3,240,120,0,1904,1917,1,0,0,0,1905,1906,3,378,189,0,
        1906,1907,5,117,0,0,1907,1908,3,240,120,0,1908,1917,1,0,0,0,1909,
        1911,5,22,0,0,1910,1909,1,0,0,0,1910,1911,1,0,0,0,1911,1913,1,0,
        0,0,1912,1914,5,20,0,0,1913,1912,1,0,0,0,1913,1914,1,0,0,0,1914,
        1915,1,0,0,0,1915,1917,3,378,189,0,1916,1901,1,0,0,0,1916,1905,1,
        0,0,0,1916,1910,1,0,0,0,1917,265,1,0,0,0,1918,1920,3,142,71,0,1919,
        1918,1,0,0,0,1920,1923,1,0,0,0,1921,1919,1,0,0,0,1921,1922,1,0,0,
        0,1922,1924,1,0,0,0,1923,1921,1,0,0,0,1924,1925,5,112,0,0,1925,267,
        1,0,0,0,1926,1927,3,342,171,0,1927,1929,5,128,0,0,1928,1930,3,270,
        135,0,1929,1928,1,0,0,0,1929,1930,1,0,0,0,1930,1931,1,0,0,0,1931,
        1932,5,129,0,0,1932,269,1,0,0,0,1933,1938,3,240,120,0,1934,1935,
        5,115,0,0,1935,1937,3,240,120,0,1936,1934,1,0,0,0,1937,1940,1,0,
        0,0,1938,1936,1,0,0,0,1938,1939,1,0,0,0,1939,1942,1,0,0,0,1940,1938,
        1,0,0,0,1941,1943,5,115,0,0,1942,1941,1,0,0,0,1942,1943,1,0,0,0,
        1943,271,1,0,0,0,1944,1946,5,128,0,0,1945,1947,3,274,137,0,1946,
        1945,1,0,0,0,1946,1947,1,0,0,0,1947,1948,1,0,0,0,1948,1949,5,129,
        0,0,1949,273,1,0,0,0,1950,1951,3,240,120,0,1951,1952,5,115,0,0,1952,
        1965,1,0,0,0,1953,1965,3,252,126,0,1954,1957,3,240,120,0,1955,1956,
        5,115,0,0,1956,1958,3,240,120,0,1957,1955,1,0,0,0,1958,1959,1,0,
        0,0,1959,1957,1,0,0,0,1959,1960,1,0,0,0,1960,1962,1,0,0,0,1961,1963,
        5,115,0,0,1962,1961,1,0,0,0,1962,1963,1,0,0,0,1963,1965,1,0,0,0,
        1964,1950,1,0,0,0,1964,1953,1,0,0,0,1964,1954,1,0,0,0,1965,275,1,
        0,0,0,1966,1967,5,128,0,0,1967,1968,3,240,120,0,1968,1969,5,129,
        0,0,1969,277,1,0,0,0,1970,1972,5,126,0,0,1971,1973,3,280,140,0,1972,
        1971,1,0,0,0,1972,1973,1,0,0,0,1973,1974,1,0,0,0,1974,1975,5,127,
        0,0,1975,279,1,0,0,0,1976,1981,3,240,120,0,1977,1978,5,115,0,0,1978,
        1980,3,240,120,0,1979,1977,1,0,0,0,1980,1983,1,0,0,0,1981,1979,1,
        0,0,0,1981,1982,1,0,0,0,1982,1985,1,0,0,0,1983,1981,1,0,0,0,1984,
        1986,5,115,0,0,1985,1984,1,0,0,0,1985,1986,1,0,0,0,1986,281,1,0,
        0,0,1987,1990,3,342,171,0,1988,1990,3,362,181,0,1989,1987,1,0,0,
        0,1989,1988,1,0,0,0,1990,283,1,0,0,0,1991,1995,3,378,189,0,1992,
        1995,3,286,143,0,1993,1995,3,300,150,0,1994,1991,1,0,0,0,1994,1992,
        1,0,0,0,1994,1993,1,0,0,0,1995,285,1,0,0,0,1996,2000,5,128,0,0,1997,
        1999,5,67,0,0,1998,1997,1,0,0,0,1999,2002,1,0,0,0,2000,1998,1,0,
        0,0,2000,2001,1,0,0,0,2001,2003,1,0,0,0,2002,2000,1,0,0,0,2003,2004,
        5,129,0,0,2004,287,1,0,0,0,2005,2020,3,290,145,0,2006,2020,3,324,
        162,0,2007,2020,3,320,160,0,2008,2020,3,368,184,0,2009,2020,3,294,
        147,0,2010,2020,3,292,146,0,2011,2020,3,302,151,0,2012,2020,3,300,
        150,0,2013,2020,3,296,148,0,2014,2020,3,298,149,0,2015,2020,3,326,
        163,0,2016,2020,3,366,183,0,2017,2020,3,304,152,0,2018,2020,3,2,
        1,0,2019,2005,1,0,0,0,2019,2006,1,0,0,0,2019,2007,1,0,0,0,2019,2008,
        1,0,0,0,2019,2009,1,0,0,0,2019,2010,1,0,0,0,2019,2011,1,0,0,0,2019,
        2012,1,0,0,0,2019,2013,1,0,0,0,2019,2014,1,0,0,0,2019,2015,1,0,0,
        0,2019,2016,1,0,0,0,2019,2017,1,0,0,0,2019,2018,1,0,0,0,2020,289,
        1,0,0,0,2021,2022,5,128,0,0,2022,2023,3,284,142,0,2023,2024,5,129,
        0,0,2024,291,1,0,0,0,2025,2026,5,88,0,0,2026,293,1,0,0,0,2027,2038,
        5,128,0,0,2028,2029,3,284,142,0,2029,2030,5,115,0,0,2030,2032,1,
        0,0,0,2031,2028,1,0,0,0,2032,2033,1,0,0,0,2033,2031,1,0,0,0,2033,
        2034,1,0,0,0,2034,2036,1,0,0,0,2035,2037,3,284,142,0,2036,2035,1,
        0,0,0,2036,2037,1,0,0,0,2037,2039,1,0,0,0,2038,2031,1,0,0,0,2038,
        2039,1,0,0,0,2039,2040,1,0,0,0,2040,2041,5,129,0,0,2041,295,1,0,
        0,0,2042,2043,5,126,0,0,2043,2044,3,284,142,0,2044,2045,5,116,0,
        0,2045,2046,3,154,77,0,2046,2047,5,127,0,0,2047,297,1,0,0,0,2048,
        2049,5,126,0,0,2049,2050,3,284,142,0,2050,2051,5,127,0,0,2051,299,
        1,0,0,0,2052,2054,5,89,0,0,2053,2055,5,20,0,0,2054,2053,1,0,0,0,
        2054,2055,1,0,0,0,2055,2056,1,0,0,0,2056,2057,3,284,142,0,2057,301,
        1,0,0,0,2058,2059,5,84,0,0,2059,2060,7,8,0,0,2060,2061,3,288,144,
        0,2061,303,1,0,0,0,2062,2064,3,136,68,0,2063,2062,1,0,0,0,2063,2064,
        1,0,0,0,2064,2065,1,0,0,0,2065,2066,3,306,153,0,2066,2067,5,10,0,
        0,2067,2069,5,128,0,0,2068,2070,3,310,155,0,2069,2068,1,0,0,0,2069,
        2070,1,0,0,0,2070,2071,1,0,0,0,2071,2073,5,129,0,0,2072,2074,3,308,
        154,0,2073,2072,1,0,0,0,2073,2074,1,0,0,0,2074,305,1,0,0,0,2075,
        2077,5,32,0,0,2076,2075,1,0,0,0,2076,2077,1,0,0,0,2077,2082,1,0,
        0,0,2078,2080,5,8,0,0,2079,2081,3,56,28,0,2080,2079,1,0,0,0,2080,
        2081,1,0,0,0,2081,2083,1,0,0,0,2082,2078,1,0,0,0,2082,2083,1,0,0,
        0,2083,307,1,0,0,0,2084,2085,5,119,0,0,2085,2086,3,288,144,0,2086,
        309,1,0,0,0,2087,2090,3,312,156,0,2088,2090,3,316,158,0,2089,2087,
        1,0,0,0,2089,2088,1,0,0,0,2090,311,1,0,0,0,2091,2096,3,314,157,0,
        2092,2093,5,115,0,0,2093,2095,3,314,157,0,2094,2092,1,0,0,0,2095,
        2098,1,0,0,0,2096,2094,1,0,0,0,2096,2097,1,0,0,0,2097,2100,1,0,0,
        0,2098,2096,1,0,0,0,2099,2101,5,115,0,0,2100,2099,1,0,0,0,2100,2101,
        1,0,0,0,2101,313,1,0,0,0,2102,2104,3,142,71,0,2103,2102,1,0,0,0,
        2104,2107,1,0,0,0,2105,2103,1,0,0,0,2105,2106,1,0,0,0,2106,2113,
        1,0,0,0,2107,2105,1,0,0,0,2108,2111,3,378,189,0,2109,2111,5,110,
        0,0,2110,2108,1,0,0,0,2110,2109,1,0,0,0,2111,2112,1,0,0,0,2112,2114,
        5,117,0,0,2113,2110,1,0,0,0,2113,2114,1,0,0,0,2114,2115,1,0,0,0,
        2115,2116,3,284,142,0,2116,315,1,0,0,0,2117,2118,3,314,157,0,2118,
        2119,5,115,0,0,2119,2121,1,0,0,0,2120,2117,1,0,0,0,2121,2124,1,0,
        0,0,2122,2120,1,0,0,0,2122,2123,1,0,0,0,2123,2125,1,0,0,0,2124,2122,
        1,0,0,0,2125,2126,3,314,157,0,2126,2130,5,115,0,0,2127,2129,3,142,
        71,0,2128,2127,1,0,0,0,2129,2132,1,0,0,0,2130,2128,1,0,0,0,2130,
        2131,1,0,0,0,2131,2133,1,0,0,0,2132,2130,1,0,0,0,2133,2134,5,113,
        0,0,2134,317,1,0,0,0,2135,2137,5,38,0,0,2136,2135,1,0,0,0,2136,2137,
        1,0,0,0,2137,2138,1,0,0,0,2138,2139,3,328,164,0,2139,319,1,0,0,0,
        2140,2142,5,38,0,0,2141,2140,1,0,0,0,2141,2142,1,0,0,0,2142,2143,
        1,0,0,0,2143,2144,3,332,166,0,2144,321,1,0,0,0,2145,2146,5,13,0,
        0,2146,2147,3,328,164,0,2147,323,1,0,0,0,2148,2149,5,13,0,0,2149,
        2150,3,332,166,0,2150,325,1,0,0,0,2151,2152,5,110,0,0,2152,327,1,
        0,0,0,2153,2158,3,330,165,0,2154,2155,5,82,0,0,2155,2157,3,330,165,
        0,2156,2154,1,0,0,0,2157,2160,1,0,0,0,2158,2156,1,0,0,0,2158,2159,
        1,0,0,0,2159,2162,1,0,0,0,2160,2158,1,0,0,0,2161,2163,5,82,0,0,2162,
        2161,1,0,0,0,2162,2163,1,0,0,0,2163,329,1,0,0,0,2164,2167,3,336,
        168,0,2165,2167,3,332,166,0,2166,2164,1,0,0,0,2166,2165,1,0,0,0,
        2167,331,1,0,0,0,2168,2170,5,123,0,0,2169,2168,1,0,0,0,2169,2170,
        1,0,0,0,2170,2172,1,0,0,0,2171,2173,3,136,68,0,2172,2171,1,0,0,0,
        2172,2173,1,0,0,0,2173,2174,1,0,0,0,2174,2186,3,368,184,0,2175,2177,
        5,128,0,0,2176,2178,5,123,0,0,2177,2176,1,0,0,0,2177,2178,1,0,0,
        0,2178,2180,1,0,0,0,2179,2181,3,136,68,0,2180,2179,1,0,0,0,2180,
        2181,1,0,0,0,2181,2182,1,0,0,0,2182,2183,3,368,184,0,2183,2184,5,
        129,0,0,2184,2186,1,0,0,0,2185,2169,1,0,0,0,2185,2175,1,0,0,0,2186,
        333,1,0,0,0,2187,2188,3,336,168,0,2188,2189,5,82,0,0,2189,2191,1,
        0,0,0,2190,2187,1,0,0,0,2191,2194,1,0,0,0,2192,2190,1,0,0,0,2192,
        2193,1,0,0,0,2193,2196,1,0,0,0,2194,2192,1,0,0,0,2195,2197,3,336,
        168,0,2196,2195,1,0,0,0,2196,2197,1,0,0,0,2197,335,1,0,0,0,2198,
        2199,7,9,0,0,2199,337,1,0,0,0,2200,2202,5,118,0,0,2201,2200,1,0,
        0,0,2201,2202,1,0,0,0,2202,2203,1,0,0,0,2203,2208,3,340,170,0,2204,
        2205,5,118,0,0,2205,2207,3,340,170,0,2206,2204,1,0,0,0,2207,2210,
        1,0,0,0,2208,2206,1,0,0,0,2208,2209,1,0,0,0,2209,339,1,0,0,0,2210,
        2208,1,0,0,0,2211,2217,3,378,189,0,2212,2217,5,28,0,0,2213,2217,
        5,24,0,0,2214,2217,5,5,0,0,2215,2217,5,56,0,0,2216,2211,1,0,0,0,
        2216,2212,1,0,0,0,2216,2213,1,0,0,0,2216,2214,1,0,0,0,2216,2215,
        1,0,0,0,2217,341,1,0,0,0,2218,2220,5,118,0,0,2219,2218,1,0,0,0,2219,
        2220,1,0,0,0,2220,2221,1,0,0,0,2221,2226,3,344,172,0,2222,2223,5,
        118,0,0,2223,2225,3,344,172,0,2224,2222,1,0,0,0,2225,2228,1,0,0,
        0,2226,2224,1,0,0,0,2226,2227,1,0,0,0,2227,343,1,0,0,0,2228,2226,
        1,0,0,0,2229,2232,3,346,173,0,2230,2231,5,118,0,0,2231,2233,3,348,
        174,0,2232,2230,1,0,0,0,2232,2233,1,0,0,0,2233,345,1,0,0,0,2234,
        2241,3,378,189,0,2235,2241,5,28,0,0,2236,2241,5,24,0,0,2237,2241,
        5,25,0,0,2238,2241,5,5,0,0,2239,2241,5,56,0,0,2240,2234,1,0,0,0,
        2240,2235,1,0,0,0,2240,2236,1,0,0,0,2240,2237,1,0,0,0,2240,2238,
        1,0,0,0,2240,2239,1,0,0,0,2241,347,1,0,0,0,2242,2243,5,106,0,0,2243,
        2286,5,105,0,0,2244,2245,5,106,0,0,2245,2248,3,354,177,0,2246,2247,
        5,115,0,0,2247,2249,3,356,178,0,2248,2246,1,0,0,0,2248,2249,1,0,
        0,0,2249,2252,1,0,0,0,2250,2251,5,115,0,0,2251,2253,3,358,179,0,
        2252,2250,1,0,0,0,2252,2253,1,0,0,0,2253,2255,1,0,0,0,2254,2256,
        5,115,0,0,2255,2254,1,0,0,0,2255,2256,1,0,0,0,2256,2257,1,0,0,0,
        2257,2258,5,105,0,0,2258,2286,1,0,0,0,2259,2260,5,106,0,0,2260,2263,
        3,356,178,0,2261,2262,5,115,0,0,2262,2264,3,358,179,0,2263,2261,
        1,0,0,0,2263,2264,1,0,0,0,2264,2266,1,0,0,0,2265,2267,5,115,0,0,
        2266,2265,1,0,0,0,2266,2267,1,0,0,0,2267,2268,1,0,0,0,2268,2269,
        5,105,0,0,2269,2286,1,0,0,0,2270,2276,5,106,0,0,2271,2272,3,350,
        175,0,2272,2273,5,115,0,0,2273,2275,1,0,0,0,2274,2271,1,0,0,0,2275,
        2278,1,0,0,0,2276,2274,1,0,0,0,2276,2277,1,0,0,0,2277,2279,1,0,0,
        0,2278,2276,1,0,0,0,2279,2281,3,350,175,0,2280,2282,5,115,0,0,2281,
        2280,1,0,0,0,2281,2282,1,0,0,0,2282,2283,1,0,0,0,2283,2284,5,105,
        0,0,2284,2286,1,0,0,0,2285,2242,1,0,0,0,2285,2244,1,0,0,0,2285,2259,
        1,0,0,0,2285,2270,1,0,0,0,2286,349,1,0,0,0,2287,2292,3,336,168,0,
        2288,2292,3,284,142,0,2289,2292,3,352,176,0,2290,2292,3,360,180,
        0,2291,2287,1,0,0,0,2291,2288,1,0,0,0,2291,2289,1,0,0,0,2291,2290,
        1,0,0,0,2292,351,1,0,0,0,2293,2300,3,166,83,0,2294,2296,5,83,0,0,
        2295,2294,1,0,0,0,2295,2296,1,0,0,0,2296,2297,1,0,0,0,2297,2300,
        3,162,81,0,2298,2300,3,340,170,0,2299,2293,1,0,0,0,2299,2295,1,0,
        0,0,2299,2298,1,0,0,0,2300,353,1,0,0,0,2301,2306,3,336,168,0,2302,
        2303,5,115,0,0,2303,2305,3,336,168,0,2304,2302,1,0,0,0,2305,2308,
        1,0,0,0,2306,2304,1,0,0,0,2306,2307,1,0,0,0,2307,355,1,0,0,0,2308,
        2306,1,0,0,0,2309,2314,3,284,142,0,2310,2311,5,115,0,0,2311,2313,
        3,284,142,0,2312,2310,1,0,0,0,2313,2316,1,0,0,0,2314,2312,1,0,0,
        0,2314,2315,1,0,0,0,2315,357,1,0,0,0,2316,2314,1,0,0,0,2317,2322,
        3,360,180,0,2318,2319,5,115,0,0,2319,2321,3,360,180,0,2320,2318,
        1,0,0,0,2321,2324,1,0,0,0,2322,2320,1,0,0,0,2322,2323,1,0,0,0,2323,
        359,1,0,0,0,2324,2322,1,0,0,0,2325,2326,3,378,189,0,2326,2327,5,
        102,0,0,2327,2328,3,284,142,0,2328,361,1,0,0,0,2329,2332,3,364,182,
        0,2330,2331,5,118,0,0,2331,2333,3,344,172,0,2332,2330,1,0,0,0,2333,
        2334,1,0,0,0,2334,2332,1,0,0,0,2334,2335,1,0,0,0,2335,363,1,0,0,
        0,2336,2337,5,106,0,0,2337,2340,3,284,142,0,2338,2339,5,1,0,0,2339,
        2341,3,368,184,0,2340,2338,1,0,0,0,2340,2341,1,0,0,0,2341,2342,1,
        0,0,0,2342,2343,5,105,0,0,2343,365,1,0,0,0,2344,2347,3,364,182,0,
        2345,2346,5,118,0,0,2346,2348,3,370,185,0,2347,2345,1,0,0,0,2348,
        2349,1,0,0,0,2349,2347,1,0,0,0,2349,2350,1,0,0,0,2350,367,1,0,0,
        0,2351,2353,5,118,0,0,2352,2351,1,0,0,0,2352,2353,1,0,0,0,2353,2354,
        1,0,0,0,2354,2359,3,370,185,0,2355,2356,5,118,0,0,2356,2358,3,370,
        185,0,2357,2355,1,0,0,0,2358,2361,1,0,0,0,2359,2357,1,0,0,0,2359,
        2360,1,0,0,0,2360,369,1,0,0,0,2361,2359,1,0,0,0,2362,2364,3,346,
        173,0,2363,2365,5,118,0,0,2364,2363,1,0,0,0,2364,2365,1,0,0,0,2365,
        2368,1,0,0,0,2366,2369,3,348,174,0,2367,2369,3,372,186,0,2368,2366,
        1,0,0,0,2368,2367,1,0,0,0,2368,2369,1,0,0,0,2369,371,1,0,0,0,2370,
        2372,5,128,0,0,2371,2373,3,374,187,0,2372,2371,1,0,0,0,2372,2373,
        1,0,0,0,2373,2374,1,0,0,0,2374,2377,5,129,0,0,2375,2376,5,119,0,
        0,2376,2378,3,284,142,0,2377,2375,1,0,0,0,2377,2378,1,0,0,0,2378,
        373,1,0,0,0,2379,2384,3,284,142,0,2380,2381,5,115,0,0,2381,2383,
        3,284,142,0,2382,2380,1,0,0,0,2383,2386,1,0,0,0,2384,2382,1,0,0,
        0,2384,2385,1,0,0,0,2385,2388,1,0,0,0,2386,2384,1,0,0,0,2387,2389,
        5,115,0,0,2388,2387,1,0,0,0,2388,2389,1,0,0,0,2389,375,1,0,0,0,2390,
        2400,5,21,0,0,2391,2397,5,128,0,0,2392,2398,5,5,0,0,2393,2398,5,
        24,0,0,2394,2398,5,28,0,0,2395,2396,5,14,0,0,2396,2398,3,338,169,
        0,2397,2392,1,0,0,0,2397,2393,1,0,0,0,2397,2394,1,0,0,0,2397,2395,
        1,0,0,0,2398,2399,1,0,0,0,2399,2401,5,129,0,0,2400,2391,1,0,0,0,
        2400,2401,1,0,0,0,2401,377,1,0,0,0,2402,2403,7,10,0,0,2403,379,1,
        0,0,0,2404,2405,7,11,0,0,2405,381,1,0,0,0,2406,2413,3,380,190,0,
        2407,2413,3,378,189,0,2408,2413,5,54,0,0,2409,2413,5,55,0,0,2410,
        2413,5,56,0,0,2411,2413,5,81,0,0,2412,2406,1,0,0,0,2412,2407,1,0,
        0,0,2412,2408,1,0,0,0,2412,2409,1,0,0,0,2412,2410,1,0,0,0,2412,2411,
        1,0,0,0,2413,383,1,0,0,0,2414,2415,3,162,81,0,2415,385,1,0,0,0,2416,
        2417,7,12,0,0,2417,387,1,0,0,0,2418,2419,5,106,0,0,2419,2420,4,194,
        21,0,2420,2421,5,106,0,0,2421,389,1,0,0,0,2422,2423,5,105,0,0,2423,
        2424,4,195,22,0,2424,2425,5,105,0,0,2425,391,1,0,0,0,332,395,408,
        416,424,428,433,436,443,451,463,475,480,501,508,512,522,530,538,
        542,547,553,562,566,570,576,584,593,598,601,616,620,623,632,638,
        642,648,654,659,666,669,678,682,684,687,693,695,697,703,707,712,
        715,718,722,724,733,737,742,747,751,753,756,761,775,783,786,790,
        796,801,804,808,812,817,821,825,834,838,843,847,858,862,867,871,
        878,881,885,894,898,903,907,913,917,923,933,936,945,951,957,964,
        969,974,978,980,983,989,995,1002,1006,1010,1016,1022,1028,1032,1035,
        1041,1047,1053,1059,1063,1069,1075,1083,1088,1092,1094,1102,1107,
        1109,1116,1122,1125,1130,1133,1138,1140,1144,1157,1161,1165,1172,
        1177,1185,1190,1195,1197,1212,1217,1223,1232,1241,1243,1249,1257,
        1266,1272,1275,1279,1282,1286,1292,1302,1306,1313,1317,1325,1336,
        1375,1391,1407,1409,1411,1421,1432,1438,1442,1449,1452,1455,1459,
        1471,1475,1481,1488,1491,1498,1505,1510,1519,1525,1527,1532,1538,
        1543,1553,1561,1565,1567,1576,1581,1590,1594,1599,1604,1613,1617,
        1619,1630,1634,1637,1642,1645,1652,1659,1663,1668,1674,1677,1683,
        1714,1716,1728,1730,1738,1742,1752,1759,1766,1768,1773,1778,1784,
        1791,1796,1809,1820,1824,1827,1830,1833,1838,1855,1860,1864,1868,
        1873,1880,1882,1885,1892,1898,1910,1913,1916,1921,1929,1938,1942,
        1946,1959,1962,1964,1972,1981,1985,1989,1994,2000,2019,2033,2036,
        2038,2054,2063,2069,2073,2076,2080,2082,2089,2096,2100,2105,2110,
        2113,2122,2130,2136,2141,2158,2162,2166,2169,2172,2177,2180,2185,
        2192,2196,2201,2208,2216,2219,2226,2232,2240,2248,2252,2255,2263,
        2266,2276,2281,2285,2291,2295,2299,2306,2314,2322,2334,2340,2349,
        2352,2359,2364,2368,2372,2377,2384,2388,2397,2400,2412
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustParser.__ATN) {
            RustParser.__ATN = new antlr.ATNDeserializer().deserialize(RustParser._serializedATN);
        }

        return RustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustParser.literalNames, RustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class CrateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustParser.EOF, 0)!;
    }
    public function_(): Function_Context[];
    public function_(i: number): Function_Context | null;
    public function_(i?: number): Function_Context[] | Function_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Function_Context);
        }

        return this.getRuleContext(i, Function_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_crate;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCrate) {
             listener.enterCrate(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCrate) {
             listener.exitCrate(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCrate) {
            return visitor.visitCrate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public delimTokenTree(): DelimTokenTreeContext {
        return this.getRuleContext(0, DelimTokenTreeContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroInvocation;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocation) {
             listener.enterMacroInvocation(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocation) {
             listener.exitMacroInvocation(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocation) {
            return visitor.visitMacroInvocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DelimTokenTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public tokenTree(): TokenTreeContext[];
    public tokenTree(i: number): TokenTreeContext | null;
    public tokenTree(i?: number): TokenTreeContext[] | TokenTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeContext);
        }

        return this.getRuleContext(i, TokenTreeContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_delimTokenTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterDelimTokenTree) {
             listener.enterDelimTokenTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitDelimTokenTree) {
             listener.exitDelimTokenTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitDelimTokenTree) {
            return visitor.visitDelimTokenTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TokenTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tokenTreeToken(): TokenTreeTokenContext[];
    public tokenTreeToken(i: number): TokenTreeTokenContext | null;
    public tokenTreeToken(i?: number): TokenTreeTokenContext[] | TokenTreeTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeTokenContext);
        }

        return this.getRuleContext(i, TokenTreeTokenContext);
    }
    public delimTokenTree(): DelimTokenTreeContext | null {
        return this.getRuleContext(0, DelimTokenTreeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tokenTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTokenTree) {
             listener.enterTokenTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTokenTree) {
             listener.exitTokenTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTokenTree) {
            return visitor.visitTokenTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TokenTreeTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tokenTreeToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTokenTreeToken) {
             listener.enterTokenTreeToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTokenTreeToken) {
             listener.exitTokenTreeToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTokenTreeToken) {
            return visitor.visitTokenTreeToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroInvocationSemiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public tokenTree(): TokenTreeContext[];
    public tokenTree(i: number): TokenTreeContext | null;
    public tokenTree(i?: number): TokenTreeContext[] | TokenTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TokenTreeContext);
        }

        return this.getRuleContext(i, TokenTreeContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroInvocationSemi;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocationSemi) {
             listener.enterMacroInvocationSemi(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocationSemi) {
             listener.exitMacroInvocationSemi(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocationSemi) {
            return visitor.visitMacroInvocationSemi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MACRORULES(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MACRORULES, 0)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public macroRulesDef(): MacroRulesDefContext {
        return this.getRuleContext(0, MacroRulesDefContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRulesDefinition;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRulesDefinition) {
             listener.enterMacroRulesDefinition(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRulesDefinition) {
             listener.exitMacroRulesDefinition(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRulesDefinition) {
            return visitor.visitMacroRulesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesDefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public macroRules(): MacroRulesContext {
        return this.getRuleContext(0, MacroRulesContext)!;
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRulesDef;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRulesDef) {
             listener.enterMacroRulesDef(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRulesDef) {
             listener.exitMacroRulesDef(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRulesDef) {
            return visitor.visitMacroRulesDef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRulesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroRule(): MacroRuleContext[];
    public macroRule(i: number): MacroRuleContext | null;
    public macroRule(i?: number): MacroRuleContext[] | MacroRuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroRuleContext);
        }

        return this.getRuleContext(i, MacroRuleContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.SEMI);
    	} else {
    		return this.getToken(RustParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRules;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRules) {
             listener.enterMacroRules(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRules) {
             listener.exitMacroRules(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRules) {
            return visitor.visitMacroRules(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroMatcher(): MacroMatcherContext {
        return this.getRuleContext(0, MacroMatcherContext)!;
    }
    public FATARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.FATARROW, 0)!;
    }
    public macroTranscriber(): MacroTranscriberContext {
        return this.getRuleContext(0, MacroTranscriberContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRule;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRule) {
             listener.enterMacroRule(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRule) {
             listener.exitMacroRule(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRule) {
            return visitor.visitMacroRule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatcherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public macroMatch(): MacroMatchContext[];
    public macroMatch(i: number): MacroMatchContext | null;
    public macroMatch(i?: number): MacroMatchContext[] | MacroMatchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchContext);
        }

        return this.getRuleContext(i, MacroMatchContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LSQUAREBRACKET, 0);
    }
    public RSQUAREBRACKET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RSQUAREBRACKET, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatcher;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatcher) {
             listener.enterMacroMatcher(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatcher) {
             listener.exitMacroMatcher(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatcher) {
            return visitor.visitMacroMatcher(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroMatchToken(): MacroMatchTokenContext[];
    public macroMatchToken(i: number): MacroMatchTokenContext | null;
    public macroMatchToken(i?: number): MacroMatchTokenContext[] | MacroMatchTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchTokenContext);
        }

        return this.getRuleContext(i, MacroMatchTokenContext);
    }
    public macroMatcher(): MacroMatcherContext | null {
        return this.getRuleContext(0, MacroMatcherContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public macroFragSpec(): MacroFragSpecContext | null {
        return this.getRuleContext(0, MacroFragSpecContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public macroMatch(): MacroMatchContext[];
    public macroMatch(i: number): MacroMatchContext | null;
    public macroMatch(i?: number): MacroMatchContext[] | MacroMatchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MacroMatchContext);
        }

        return this.getRuleContext(i, MacroMatchContext);
    }
    public macroRepSep(): MacroRepSepContext | null {
        return this.getRuleContext(0, MacroRepSepContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatch;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatch) {
             listener.enterMacroMatch(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatch) {
             listener.exitMacroMatch(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatch) {
            return visitor.visitMacroMatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroMatchTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public macroRepOp(): MacroRepOpContext | null {
        return this.getRuleContext(0, MacroRepOpContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroMatchToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroMatchToken) {
             listener.enterMacroMatchToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroMatchToken) {
             listener.exitMacroMatchToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroMatchToken) {
            return visitor.visitMacroMatchToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroFragSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroFragSpec;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroFragSpec) {
             listener.enterMacroFragSpec(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroFragSpec) {
             listener.exitMacroFragSpec(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroFragSpec) {
            return visitor.visitMacroFragSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRepSepContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroIdentifierLikeToken(): MacroIdentifierLikeTokenContext | null {
        return this.getRuleContext(0, MacroIdentifierLikeTokenContext);
    }
    public macroLiteralToken(): MacroLiteralTokenContext | null {
        return this.getRuleContext(0, MacroLiteralTokenContext);
    }
    public macroPunctuationToken(): MacroPunctuationTokenContext | null {
        return this.getRuleContext(0, MacroPunctuationTokenContext);
    }
    public DOLLAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOLLAR, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRepSep;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRepSep) {
             listener.enterMacroRepSep(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRepSep) {
             listener.exitMacroRepSep(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRepSep) {
            return visitor.visitMacroRepSep(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroRepOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.QUESTION, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroRepOp;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroRepOp) {
             listener.enterMacroRepOp(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroRepOp) {
             listener.exitMacroRepOp(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroRepOp) {
            return visitor.visitMacroRepOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroTranscriberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public delimTokenTree(): DelimTokenTreeContext {
        return this.getRuleContext(0, DelimTokenTreeContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroTranscriber;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroTranscriber) {
             listener.enterMacroTranscriber(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroTranscriber) {
             listener.exitMacroTranscriber(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroTranscriber) {
            return visitor.visitMacroTranscriber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public visItem(): VisItemContext | null {
        return this.getRuleContext(0, VisItemContext);
    }
    public macroItem(): MacroItemContext | null {
        return this.getRuleContext(0, MacroItemContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_item;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterItem) {
             listener.enterItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitItem) {
             listener.exitItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VisItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public module(): ModuleContext | null {
        return this.getRuleContext(0, ModuleContext);
    }
    public externCrate(): ExternCrateContext | null {
        return this.getRuleContext(0, ExternCrateContext);
    }
    public useDeclaration(): UseDeclarationContext | null {
        return this.getRuleContext(0, UseDeclarationContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public typeAlias(): TypeAliasContext | null {
        return this.getRuleContext(0, TypeAliasContext);
    }
    public struct_(): Struct_Context | null {
        return this.getRuleContext(0, Struct_Context);
    }
    public enumeration(): EnumerationContext | null {
        return this.getRuleContext(0, EnumerationContext);
    }
    public union_(): Union_Context | null {
        return this.getRuleContext(0, Union_Context);
    }
    public constantItem(): ConstantItemContext | null {
        return this.getRuleContext(0, ConstantItemContext);
    }
    public staticItem(): StaticItemContext | null {
        return this.getRuleContext(0, StaticItemContext);
    }
    public trait_(): Trait_Context | null {
        return this.getRuleContext(0, Trait_Context);
    }
    public implementation(): ImplementationContext | null {
        return this.getRuleContext(0, ImplementationContext);
    }
    public externBlock(): ExternBlockContext | null {
        return this.getRuleContext(0, ExternBlockContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_visItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterVisItem) {
             listener.enterVisItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitVisItem) {
             listener.exitVisItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitVisItem) {
            return visitor.visitVisItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public macroRulesDefinition(): MacroRulesDefinitionContext | null {
        return this.getRuleContext(0, MacroRulesDefinitionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroItem) {
             listener.enterMacroItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroItem) {
             listener.exitMacroItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroItem) {
            return visitor.visitMacroItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MOD(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MOD, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public item(): ItemContext[];
    public item(i: number): ItemContext | null;
    public item(i?: number): ItemContext[] | ItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }

        return this.getRuleContext(i, ItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_module;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterModule) {
             listener.enterModule(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitModule) {
             listener.exitModule(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitModule) {
            return visitor.visitModule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternCrateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXTERN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_EXTERN, 0)!;
    }
    public KW_CRATE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CRATE, 0)!;
    }
    public crateRef(): CrateRefContext {
        return this.getRuleContext(0, CrateRefContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public asClause(): AsClauseContext | null {
        return this.getRuleContext(0, AsClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externCrate;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternCrate) {
             listener.enterExternCrate(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternCrate) {
             listener.exitExternCrate(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternCrate) {
            return visitor.visitExternCrate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CrateRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_crateRef;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCrateRef) {
             listener.enterCrateRef(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCrateRef) {
             listener.exitCrateRef(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCrateRef) {
            return visitor.visitCrateRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_asClause;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAsClause) {
             listener.enterAsClause(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAsClause) {
             listener.exitAsClause(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAsClause) {
            return visitor.visitAsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_USE, 0)!;
    }
    public useTree(): UseTreeContext {
        return this.getRuleContext(0, UseTreeContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_useDeclaration;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUseDeclaration) {
             listener.enterUseDeclaration(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUseDeclaration) {
             listener.exitUseDeclaration(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUseDeclaration) {
            return visitor.visitUseDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseTreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public useTree(): UseTreeContext[];
    public useTree(i: number): UseTreeContext | null;
    public useTree(i?: number): UseTreeContext[] | UseTreeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UseTreeContext);
        }

        return this.getRuleContext(i, UseTreeContext);
    }
    public simplePath(): SimplePathContext | null {
        return this.getRuleContext(0, SimplePathContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_useTree;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUseTree) {
             listener.enterUseTree(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUseTree) {
             listener.exitUseTree(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUseTree) {
            return visitor.visitUseTree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FN, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public functionParameters(): FunctionParametersContext | null {
        return this.getRuleContext(0, FunctionParametersContext);
    }
    public functionReturnType(): FunctionReturnTypeContext | null {
        return this.getRuleContext(0, FunctionReturnTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_function_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunction_) {
             listener.enterFunction_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunction_) {
             listener.exitFunction_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunction_) {
            return visitor.visitFunction_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionQualifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public KW_ASYNC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ASYNC, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionQualifiers;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionQualifiers) {
             listener.enterFunctionQualifiers(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionQualifiers) {
             listener.exitFunctionQualifiers(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionQualifiers) {
            return visitor.visitFunctionQualifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AbiContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_abi;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAbi) {
             listener.enterAbi(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAbi) {
             listener.exitAbi(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAbi) {
            return visitor.visitAbi(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParameters) {
             listener.enterFunctionParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParameters) {
             listener.exitFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParameters) {
            return visitor.visitFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelfParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public shorthandSelf(): ShorthandSelfContext | null {
        return this.getRuleContext(0, ShorthandSelfContext);
    }
    public typedSelf(): TypedSelfContext | null {
        return this.getRuleContext(0, TypedSelfContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_selfParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSelfParam) {
             listener.enterSelfParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSelfParam) {
             listener.exitSelfParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSelfParam) {
            return visitor.visitSelfParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShorthandSelfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELFVALUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_SELFVALUE, 0)!;
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shorthandSelf;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShorthandSelf) {
             listener.enterShorthandSelf(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShorthandSelf) {
             listener.exitShorthandSelf(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShorthandSelf) {
            return visitor.visitShorthandSelf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypedSelfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELFVALUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_SELFVALUE, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typedSelf;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypedSelf) {
             listener.enterTypedSelf(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypedSelf) {
             listener.exitTypedSelf(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypedSelf) {
            return visitor.visitTypedSelf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParam) {
             listener.enterFunctionParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParam) {
             listener.exitFunctionParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public DOTDOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParamPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParamPattern) {
             listener.enterFunctionParamPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParamPattern) {
             listener.exitFunctionParamPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParamPattern) {
            return visitor.visitFunctionParamPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.RARROW, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionReturnType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionReturnType) {
             listener.enterFunctionReturnType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionReturnType) {
             listener.exitFunctionReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionReturnType) {
            return visitor.visitFunctionReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TYPE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_TYPE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeAlias;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeAlias) {
             listener.enterTypeAlias(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeAlias) {
             listener.exitTypeAlias(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Struct_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structStruct(): StructStructContext | null {
        return this.getRuleContext(0, StructStructContext);
    }
    public tupleStruct(): TupleStructContext | null {
        return this.getRuleContext(0, TupleStructContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_struct_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStruct_) {
             listener.enterStruct_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStruct_) {
             listener.exitStruct_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStruct_) {
            return visitor.visitStruct_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STRUCT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STRUCT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LCURLYBRACE, 0);
    }
    public RCURLYBRACE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RCURLYBRACE, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public structFields(): StructFieldsContext | null {
        return this.getRuleContext(0, StructFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructStruct) {
             listener.enterStructStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructStruct) {
             listener.exitStructStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructStruct) {
            return visitor.visitStructStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STRUCT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STRUCT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public tupleFields(): TupleFieldsContext | null {
        return this.getRuleContext(0, TupleFieldsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStruct) {
             listener.enterTupleStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStruct) {
             listener.exitTupleStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStruct) {
            return visitor.visitTupleStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structField(): StructFieldContext[];
    public structField(i: number): StructFieldContext | null;
    public structField(i?: number): StructFieldContext[] | StructFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructFieldContext);
        }

        return this.getRuleContext(i, StructFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructFields) {
             listener.enterStructFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructFields) {
             listener.exitStructFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructFields) {
            return visitor.visitStructFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructField) {
             listener.enterStructField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructField) {
             listener.exitStructField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructField) {
            return visitor.visitStructField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tupleField(): TupleFieldContext[];
    public tupleField(i: number): TupleFieldContext | null;
    public tupleField(i?: number): TupleFieldContext[] | TupleFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TupleFieldContext);
        }

        return this.getRuleContext(i, TupleFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleFields) {
             listener.enterTupleFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleFields) {
             listener.exitTupleFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleFields) {
            return visitor.visitTupleFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleField) {
             listener.enterTupleField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleField) {
             listener.exitTupleField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleField) {
            return visitor.visitTupleField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumerationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ENUM(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_ENUM, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public enumItems(): EnumItemsContext | null {
        return this.getRuleContext(0, EnumItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumeration;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumeration) {
             listener.enterEnumeration(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumeration) {
             listener.exitEnumeration(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumeration) {
            return visitor.visitEnumeration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumItem(): EnumItemContext[];
    public enumItem(i: number): EnumItemContext | null;
    public enumItem(i?: number): EnumItemContext[] | EnumItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumItemContext);
        }

        return this.getRuleContext(i, EnumItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItems) {
             listener.enterEnumItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItems) {
             listener.exitEnumItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItems) {
            return visitor.visitEnumItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public enumItemTuple(): EnumItemTupleContext | null {
        return this.getRuleContext(0, EnumItemTupleContext);
    }
    public enumItemStruct(): EnumItemStructContext | null {
        return this.getRuleContext(0, EnumItemStructContext);
    }
    public enumItemDiscriminant(): EnumItemDiscriminantContext | null {
        return this.getRuleContext(0, EnumItemDiscriminantContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItem) {
             listener.enterEnumItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItem) {
             listener.exitEnumItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItem) {
            return visitor.visitEnumItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tupleFields(): TupleFieldsContext | null {
        return this.getRuleContext(0, TupleFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemTuple) {
             listener.enterEnumItemTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemTuple) {
             listener.exitEnumItemTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemTuple) {
            return visitor.visitEnumItemTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public structFields(): StructFieldsContext | null {
        return this.getRuleContext(0, StructFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemStruct) {
             listener.enterEnumItemStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemStruct) {
             listener.exitEnumItemStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemStruct) {
            return visitor.visitEnumItemStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumItemDiscriminantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumItemDiscriminant;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumItemDiscriminant) {
             listener.enterEnumItemDiscriminant(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumItemDiscriminant) {
             listener.exitEnumItemDiscriminant(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumItemDiscriminant) {
            return visitor.visitEnumItemDiscriminant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Union_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNION(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_UNION, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public structFields(): StructFieldsContext {
        return this.getRuleContext(0, StructFieldsContext)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_union_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUnion_) {
             listener.enterUnion_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUnion_) {
             listener.exitUnion_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUnion_) {
            return visitor.visitUnion_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONST, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constantItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterConstantItem) {
             listener.enterConstantItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitConstantItem) {
             listener.exitConstantItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitConstantItem) {
            return visitor.visitConstantItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StaticItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STATIC(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_STATIC, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_staticItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStaticItem) {
             listener.enterStaticItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStaticItem) {
             listener.exitStaticItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStaticItem) {
            return visitor.visitStaticItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Trait_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRAIT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_TRAIT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_trait_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTrait_) {
             listener.enterTrait_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTrait_) {
             listener.exitTrait_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTrait_) {
            return visitor.visitTrait_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplementationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public inherentImpl(): InherentImplContext | null {
        return this.getRuleContext(0, InherentImplContext);
    }
    public traitImpl(): TraitImplContext | null {
        return this.getRuleContext(0, TraitImplContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implementation;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplementation) {
             listener.enterImplementation(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplementation) {
             listener.exitImplementation(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplementation) {
            return visitor.visitImplementation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InherentImplContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_inherentImpl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInherentImpl) {
             listener.enterInherentImpl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInherentImpl) {
             listener.exitInherentImpl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInherentImpl) {
            return visitor.visitInherentImpl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitImplContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public typePath(): TypePathContext {
        return this.getRuleContext(0, TypePathContext)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public genericParams(): GenericParamsContext | null {
        return this.getRuleContext(0, GenericParamsContext);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public associatedItem(): AssociatedItemContext[];
    public associatedItem(i: number): AssociatedItemContext | null;
    public associatedItem(i?: number): AssociatedItemContext[] | AssociatedItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssociatedItemContext);
        }

        return this.getRuleContext(i, AssociatedItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitImpl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitImpl) {
             listener.enterTraitImpl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitImpl) {
             listener.exitTraitImpl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitImpl) {
            return visitor.visitTraitImpl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXTERN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_EXTERN, 0)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public externalItem(): ExternalItemContext[];
    public externalItem(i: number): ExternalItemContext | null;
    public externalItem(i?: number): ExternalItemContext[] | ExternalItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExternalItemContext);
        }

        return this.getRuleContext(i, ExternalItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externBlock;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternBlock) {
             listener.enterExternBlock(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternBlock) {
             listener.exitExternBlock(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternBlock) {
            return visitor.visitExternBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExternalItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public staticItem(): StaticItemContext | null {
        return this.getRuleContext(0, StaticItemContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_externalItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExternalItem) {
             listener.enterExternalItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExternalItem) {
             listener.exitExternalItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExternalItem) {
            return visitor.visitExternalItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public genericParam(): GenericParamContext[];
    public genericParam(i: number): GenericParamContext | null;
    public genericParam(i?: number): GenericParamContext[] | GenericParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericParamContext);
        }

        return this.getRuleContext(i, GenericParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericParams;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericParams) {
             listener.enterGenericParams(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericParams) {
             listener.exitGenericParams(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericParams) {
            return visitor.visitGenericParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetimeParam(): LifetimeParamContext | null {
        return this.getRuleContext(0, LifetimeParamContext);
    }
    public typeParam(): TypeParamContext | null {
        return this.getRuleContext(0, TypeParamContext);
    }
    public constParam(): ConstParamContext | null {
        return this.getRuleContext(0, ConstParamContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericParam) {
             listener.enterGenericParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericParam) {
             listener.exitGenericParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericParam) {
            return visitor.visitGenericParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0)!;
    }
    public outerAttribute(): OuterAttributeContext | null {
        return this.getRuleContext(0, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public lifetimeBounds(): LifetimeBoundsContext | null {
        return this.getRuleContext(0, LifetimeBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeParam) {
             listener.enterLifetimeParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeParam) {
             listener.exitLifetimeParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeParam) {
            return visitor.visitLifetimeParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public outerAttribute(): OuterAttributeContext | null {
        return this.getRuleContext(0, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParam) {
             listener.enterTypeParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParam) {
             listener.exitTypeParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParam) {
            return visitor.visitTypeParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CONST(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONST, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_constParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterConstParam) {
             listener.enterConstParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitConstParam) {
             listener.exitConstParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitConstParam) {
            return visitor.visitConstParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHERE, 0)!;
    }
    public whereClauseItem(): WhereClauseItemContext[];
    public whereClauseItem(i: number): WhereClauseItemContext | null;
    public whereClauseItem(i?: number): WhereClauseItemContext[] | WhereClauseItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhereClauseItemContext);
        }

        return this.getRuleContext(i, WhereClauseItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whereClause;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetimeWhereClauseItem(): LifetimeWhereClauseItemContext | null {
        return this.getRuleContext(0, LifetimeWhereClauseItemContext);
    }
    public typeBoundWhereClauseItem(): TypeBoundWhereClauseItemContext | null {
        return this.getRuleContext(0, TypeBoundWhereClauseItemContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_whereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWhereClauseItem) {
             listener.enterWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWhereClauseItem) {
             listener.exitWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClauseItem) {
            return visitor.visitWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeWhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext {
        return this.getRuleContext(0, LifetimeContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public lifetimeBounds(): LifetimeBoundsContext {
        return this.getRuleContext(0, LifetimeBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeWhereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeWhereClauseItem) {
             listener.enterLifetimeWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeWhereClauseItem) {
             listener.exitLifetimeWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeWhereClauseItem) {
            return visitor.visitLifetimeWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeBoundWhereClauseItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public typeParamBounds(): TypeParamBoundsContext | null {
        return this.getRuleContext(0, TypeParamBoundsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeBoundWhereClauseItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeBoundWhereClauseItem) {
             listener.enterTypeBoundWhereClauseItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeBoundWhereClauseItem) {
             listener.exitTypeBoundWhereClauseItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeBoundWhereClauseItem) {
            return visitor.visitTypeBoundWhereClauseItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForLifetimesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public genericParams(): GenericParamsContext {
        return this.getRuleContext(0, GenericParamsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_forLifetimes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterForLifetimes) {
             listener.enterForLifetimes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitForLifetimes) {
             listener.exitForLifetimes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitForLifetimes) {
            return visitor.visitForLifetimes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssociatedItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public macroInvocationSemi(): MacroInvocationSemiContext | null {
        return this.getRuleContext(0, MacroInvocationSemiContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public typeAlias(): TypeAliasContext | null {
        return this.getRuleContext(0, TypeAliasContext);
    }
    public constantItem(): ConstantItemContext | null {
        return this.getRuleContext(0, ConstantItemContext);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public visibility(): VisibilityContext | null {
        return this.getRuleContext(0, VisibilityContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_associatedItem;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAssociatedItem) {
             listener.enterAssociatedItem(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAssociatedItem) {
             listener.exitAssociatedItem(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAssociatedItem) {
            return visitor.visitAssociatedItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InnerAttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POUND(): antlr.TerminalNode {
        return this.getToken(RustParser.POUND, 0)!;
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public attr(): AttrContext {
        return this.getRuleContext(0, AttrContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_innerAttribute;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInnerAttribute) {
             listener.enterInnerAttribute(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInnerAttribute) {
             listener.exitInnerAttribute(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInnerAttribute) {
            return visitor.visitInnerAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OuterAttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POUND(): antlr.TerminalNode {
        return this.getToken(RustParser.POUND, 0)!;
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public attr(): AttrContext {
        return this.getRuleContext(0, AttrContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_outerAttribute;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterOuterAttribute) {
             listener.enterOuterAttribute(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitOuterAttribute) {
             listener.exitOuterAttribute(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitOuterAttribute) {
            return visitor.visitOuterAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePath(): SimplePathContext {
        return this.getRuleContext(0, SimplePathContext)!;
    }
    public attrInput(): AttrInputContext | null {
        return this.getRuleContext(0, AttrInputContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_attr;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttr) {
             listener.enterAttr(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttr) {
             listener.exitAttr(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttr) {
            return visitor.visitAttr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttrInputContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public delimTokenTree(): DelimTokenTreeContext | null {
        return this.getRuleContext(0, DelimTokenTreeContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public literalExpression(): LiteralExpressionContext | null {
        return this.getRuleContext(0, LiteralExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_attrInput;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttrInput) {
             listener.enterAttrInput(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttrInput) {
             listener.exitAttrInput(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttrInput) {
            return visitor.visitAttrInput(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public function_(): Function_Context | null {
        return this.getRuleContext(0, Function_Context);
    }
    public letStatement(): LetStatementContext | null {
        return this.getRuleContext(0, LetStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public identifierPattern(): IdentifierPatternContext {
        return this.getRuleContext(0, IdentifierPatternContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_letStatement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLetStatement) {
             listener.enterLetStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLetStatement) {
             listener.exitLetStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLetStatement) {
            return visitor.visitLetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionStatement;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class TypeCastExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AS, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeCastExpression) {
             listener.enterTypeCastExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeCastExpression) {
             listener.exitTypeCastExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeCastExpression) {
            return visitor.visitTypeCastExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpression(): PathExpressionContext {
        return this.getRuleContext(0, PathExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExpression_) {
             listener.enterPathExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExpression_) {
             listener.exitPathExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExpression_) {
            return visitor.visitPathExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public tupleElements(): TupleElementsContext | null {
        return this.getRuleContext(0, TupleElementsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleExpression) {
             listener.enterTupleExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleExpression) {
             listener.exitTupleExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleExpression) {
            return visitor.visitTupleExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIndexExpression) {
             listener.enterIndexExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIndexExpression) {
             listener.exitIndexExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIndexExpression) {
            return visitor.visitIndexExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOT, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public DOTDOTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTEQ, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRangeExpression) {
             listener.enterRangeExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRangeExpression) {
             listener.exitRangeExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRangeExpression) {
            return visitor.visitRangeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MacroInvocationAsExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public macroInvocation(): MacroInvocationContext {
        return this.getRuleContext(0, MacroInvocationContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroInvocationAsExpression) {
             listener.enterMacroInvocationAsExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroInvocationAsExpression) {
             listener.exitMacroInvocationAsExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroInvocationAsExpression) {
            return visitor.visitMacroInvocationAsExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReturnExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_RETURN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_RETURN, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterReturnExpression) {
             listener.enterReturnExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitReturnExpression) {
             listener.exitReturnExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitReturnExpression) {
            return visitor.visitReturnExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AwaitExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public KW_AWAIT(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_AWAIT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAwaitExpression) {
             listener.enterAwaitExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAwaitExpression) {
             listener.exitAwaitExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAwaitExpression) {
            return visitor.visitAwaitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorPropagationExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public QUESTION(): antlr.TerminalNode {
        return this.getToken(RustParser.QUESTION, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterErrorPropagationExpression) {
             listener.enterErrorPropagationExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitErrorPropagationExpression) {
             listener.exitErrorPropagationExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitErrorPropagationExpression) {
            return visitor.visitErrorPropagationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContinueExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CONTINUE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_CONTINUE, 0)!;
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterContinueExpression) {
             listener.enterContinueExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitContinueExpression) {
             listener.exitContinueExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitContinueExpression) {
            return visitor.visitContinueExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAssignmentExpression) {
             listener.enterAssignmentExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAssignmentExpression) {
             listener.exitAssignmentExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MethodCallExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public pathExprSegment(): PathExprSegmentContext {
        return this.getRuleContext(0, PathExprSegmentContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMethodCallExpression) {
             listener.enterMethodCallExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMethodCallExpression) {
             listener.exitMethodCallExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMethodCallExpression) {
            return visitor.visitMethodCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literalExpression(): LiteralExpressionContext {
        return this.getRuleContext(0, LiteralExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralExpression_) {
             listener.enterLiteralExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralExpression_) {
             listener.exitLiteralExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression_) {
            return visitor.visitLiteralExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StructExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public structExpression(): StructExpressionContext {
        return this.getRuleContext(0, StructExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExpression_) {
             listener.enterStructExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExpression_) {
             listener.exitStructExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExpression_) {
            return visitor.visitStructExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TupleIndexingExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public tupleIndex(): TupleIndexContext {
        return this.getRuleContext(0, TupleIndexContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleIndexingExpression) {
             listener.enterTupleIndexingExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleIndexingExpression) {
             listener.exitTupleIndexingExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleIndexingExpression) {
            return visitor.visitTupleIndexingExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegationExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterNegationExpression) {
             listener.enterNegationExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitNegationExpression) {
             listener.exitNegationExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitNegationExpression) {
            return visitor.visitNegationExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CallExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public callParams(): CallParamsContext | null {
        return this.getRuleContext(0, CallParamsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCallExpression) {
             listener.enterCallExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCallExpression) {
             listener.exitCallExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCallExpression) {
            return visitor.visitCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LazyBooleanExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.AND);
    	} else {
    		return this.getToken(RustParser.AND, i);
    	}
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLazyBooleanExpression) {
             listener.enterLazyBooleanExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLazyBooleanExpression) {
             listener.exitLazyBooleanExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLazyBooleanExpression) {
            return visitor.visitLazyBooleanExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DereferenceExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(RustParser.STAR, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterDereferenceExpression) {
             listener.enterDereferenceExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitDereferenceExpression) {
             listener.exitDereferenceExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitDereferenceExpression) {
            return visitor.visitDereferenceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionWithBlock_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressionWithBlock(): ExpressionWithBlockContext {
        return this.getRuleContext(0, ExpressionWithBlockContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionWithBlock_) {
             listener.enterExpressionWithBlock_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionWithBlock_) {
             listener.exitExpressionWithBlock_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock_) {
            return visitor.visitExpressionWithBlock_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupedExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGroupedExpression) {
             listener.enterGroupedExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGroupedExpression) {
             listener.exitGroupedExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGroupedExpression) {
            return visitor.visitGroupedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BreakExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_BREAK(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_BREAK, 0)!;
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBreakExpression) {
             listener.enterBreakExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBreakExpression) {
             listener.exitBreakExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBreakExpression) {
            return visitor.visitBreakExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticOrLogicalExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public shl(): ShlContext | null {
        return this.getRuleContext(0, ShlContext);
    }
    public shr(): ShrContext | null {
        return this.getRuleContext(0, ShrContext);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARET, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OR, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArithmeticOrLogicalExpression) {
             listener.enterArithmeticOrLogicalExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArithmeticOrLogicalExpression) {
             listener.exitArithmeticOrLogicalExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticOrLogicalExpression) {
            return visitor.visitArithmeticOrLogicalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FieldExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFieldExpression) {
             listener.enterFieldExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFieldExpression) {
             listener.exitFieldExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFieldExpression) {
            return visitor.visitFieldExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EnumerationVariantExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public enumerationVariantExpression(): EnumerationVariantExpressionContext {
        return this.getRuleContext(0, EnumerationVariantExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumerationVariantExpression_) {
             listener.enterEnumerationVariantExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumerationVariantExpression_) {
             listener.exitEnumerationVariantExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumerationVariantExpression_) {
            return visitor.visitEnumerationVariantExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterComparisonExpression) {
             listener.enterComparisonExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitComparisonExpression) {
             listener.exitComparisonExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonExpression) {
            return visitor.visitComparisonExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AttributedExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAttributedExpression) {
             listener.enterAttributedExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAttributedExpression) {
             listener.exitAttributedExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAttributedExpression) {
            return visitor.visitAttributedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BorrowExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(RustParser.AND, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBorrowExpression) {
             listener.enterBorrowExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBorrowExpression) {
             listener.exitBorrowExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBorrowExpression) {
            return visitor.visitBorrowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CompoundAssignmentExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public compoundAssignOperator(): CompoundAssignOperatorContext {
        return this.getRuleContext(0, CompoundAssignOperatorContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCompoundAssignmentExpression) {
             listener.enterCompoundAssignmentExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCompoundAssignmentExpression) {
             listener.exitCompoundAssignmentExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCompoundAssignmentExpression) {
            return visitor.visitCompoundAssignmentExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ClosureExpression_Context extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public closureExpression(): ClosureExpressionContext {
        return this.getRuleContext(0, ClosureExpressionContext)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureExpression_) {
             listener.enterClosureExpression_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureExpression_) {
             listener.exitClosureExpression_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureExpression_) {
            return visitor.visitClosureExpression_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public arrayElements(): ArrayElementsContext | null {
        return this.getRuleContext(0, ArrayElementsContext);
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayExpression) {
             listener.enterArrayExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayExpression) {
             listener.exitArrayExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayExpression) {
            return visitor.visitArrayExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQEQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompoundAssignOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUSEQ, 0);
    }
    public STAREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAREQ, 0);
    }
    public SLASHEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASHEQ, 0);
    }
    public PERCENTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENTEQ, 0);
    }
    public ANDEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDEQ, 0);
    }
    public OREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OREQ, 0);
    }
    public CARETEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARETEQ, 0);
    }
    public SHLEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHLEQ, 0);
    }
    public SHREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHREQ, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_compoundAssignOperator;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCompoundAssignOperator) {
             listener.enterCompoundAssignOperator(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCompoundAssignOperator) {
             listener.exitCompoundAssignOperator(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCompoundAssignOperator) {
            return visitor.visitCompoundAssignOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionWithBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public asyncBlockExpression(): AsyncBlockExpressionContext | null {
        return this.getRuleContext(0, AsyncBlockExpressionContext);
    }
    public unsafeBlockExpression(): UnsafeBlockExpressionContext | null {
        return this.getRuleContext(0, UnsafeBlockExpressionContext);
    }
    public loopExpression(): LoopExpressionContext | null {
        return this.getRuleContext(0, LoopExpressionContext);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public ifLetExpression(): IfLetExpressionContext | null {
        return this.getRuleContext(0, IfLetExpressionContext);
    }
    public matchExpression(): MatchExpressionContext | null {
        return this.getRuleContext(0, MatchExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_expressionWithBlock;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterExpressionWithBlock) {
             listener.enterExpressionWithBlock(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitExpressionWithBlock) {
             listener.exitExpressionWithBlock(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionWithBlock) {
            return visitor.visitExpressionWithBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_STRING_LITERAL, 0);
    }
    public RAW_BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_BYTE_STRING_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_literalExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext | null {
        return this.getRuleContext(0, PathInExpressionContext);
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext | null {
        return this.getRuleContext(0, QualifiedPathInExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExpression) {
             listener.enterPathExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExpression) {
             listener.exitPathExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExpression) {
            return visitor.visitPathExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public statements(): StatementsContext | null {
        return this.getRuleContext(0, StatementsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_blockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBlockExpression) {
             listener.enterBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBlockExpression) {
             listener.exitBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBlockExpression) {
            return visitor.visitBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_statements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStatements) {
             listener.enterStatements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStatements) {
             listener.exitStatements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AsyncBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ASYNC(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_ASYNC, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_asyncBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterAsyncBlockExpression) {
             listener.enterAsyncBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitAsyncBlockExpression) {
             listener.exitAsyncBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitAsyncBlockExpression) {
            return visitor.visitAsyncBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnsafeBlockExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNSAFE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_UNSAFE, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_unsafeBlockExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUnsafeBlockExpression) {
             listener.enterUnsafeBlockExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUnsafeBlockExpression) {
             listener.exitUnsafeBlockExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUnsafeBlockExpression) {
            return visitor.visitUnsafeBlockExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arrayElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayElements) {
             listener.enterArrayElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayElements) {
             listener.exitArrayElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayElements) {
            return visitor.visitArrayElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleElements) {
             listener.enterTupleElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleElements) {
             listener.exitTupleElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleElements) {
            return visitor.visitTupleElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode {
        return this.getToken(RustParser.INTEGER_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleIndex;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleIndex) {
             listener.enterTupleIndex(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleIndex) {
             listener.exitTupleIndex(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleIndex) {
            return visitor.visitTupleIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structExprStruct(): StructExprStructContext | null {
        return this.getRuleContext(0, StructExprStructContext);
    }
    public structExprTuple(): StructExprTupleContext | null {
        return this.getRuleContext(0, StructExprTupleContext);
    }
    public structExprUnit(): StructExprUnitContext | null {
        return this.getRuleContext(0, StructExprUnitContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExpression) {
             listener.enterStructExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExpression) {
             listener.exitStructExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExpression) {
            return visitor.visitStructExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public structExprFields(): StructExprFieldsContext | null {
        return this.getRuleContext(0, StructExprFieldsContext);
    }
    public structBase(): StructBaseContext | null {
        return this.getRuleContext(0, StructBaseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprStruct) {
             listener.enterStructExprStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprStruct) {
             listener.exitStructExprStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprStruct) {
            return visitor.visitStructExprStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structExprField(): StructExprFieldContext[];
    public structExprField(i: number): StructExprFieldContext | null;
    public structExprField(i?: number): StructExprFieldContext[] | StructExprFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructExprFieldContext);
        }

        return this.getRuleContext(i, StructExprFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public structBase(): StructBaseContext | null {
        return this.getRuleContext(0, StructBaseContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprFields) {
             listener.enterStructExprFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprFields) {
             listener.exitStructExprFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprFields) {
            return visitor.visitStructExprFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprField) {
             listener.enterStructExprField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprField) {
             listener.exitStructExprField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprField) {
            return visitor.visitStructExprField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructBaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structBase;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructBase) {
             listener.enterStructBase(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructBase) {
             listener.exitStructBase(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructBase) {
            return visitor.visitStructBase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprTuple) {
             listener.enterStructExprTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprTuple) {
             listener.exitStructExprTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprTuple) {
            return visitor.visitStructExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructExprUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structExprUnit;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructExprUnit) {
             listener.enterStructExprUnit(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructExprUnit) {
             listener.exitStructExprUnit(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructExprUnit) {
            return visitor.visitStructExprUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumerationVariantExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumExprStruct(): EnumExprStructContext | null {
        return this.getRuleContext(0, EnumExprStructContext);
    }
    public enumExprTuple(): EnumExprTupleContext | null {
        return this.getRuleContext(0, EnumExprTupleContext);
    }
    public enumExprFieldless(): EnumExprFieldlessContext | null {
        return this.getRuleContext(0, EnumExprFieldlessContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumerationVariantExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumerationVariantExpression) {
             listener.enterEnumerationVariantExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumerationVariantExpression) {
             listener.exitEnumerationVariantExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumerationVariantExpression) {
            return visitor.visitEnumerationVariantExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprStructContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public enumExprFields(): EnumExprFieldsContext | null {
        return this.getRuleContext(0, EnumExprFieldsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprStruct;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprStruct) {
             listener.enterEnumExprStruct(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprStruct) {
             listener.exitEnumExprStruct(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprStruct) {
            return visitor.visitEnumExprStruct(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumExprField(): EnumExprFieldContext[];
    public enumExprField(i: number): EnumExprFieldContext | null;
    public enumExprField(i?: number): EnumExprFieldContext[] | EnumExprFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumExprFieldContext);
        }

        return this.getRuleContext(i, EnumExprFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprFields) {
             listener.enterEnumExprFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprFields) {
             listener.exitEnumExprFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprFields) {
            return visitor.visitEnumExprFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprField) {
             listener.enterEnumExprField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprField) {
             listener.exitEnumExprField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprField) {
            return visitor.visitEnumExprField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprTupleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprTuple;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprTuple) {
             listener.enterEnumExprTuple(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprTuple) {
             listener.exitEnumExprTuple(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprTuple) {
            return visitor.visitEnumExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumExprFieldlessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_enumExprFieldless;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterEnumExprFieldless) {
             listener.enterEnumExprFieldless(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitEnumExprFieldless) {
             listener.exitEnumExprFieldless(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitEnumExprFieldless) {
            return visitor.visitEnumExprFieldless(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_callParams;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterCallParams) {
             listener.enterCallParams(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitCallParams) {
             listener.exitCallParams(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitCallParams) {
            return visitor.visitCallParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.OR);
    	} else {
    		return this.getToken(RustParser.OR, i);
    	}
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public typeNoBounds(): TypeNoBoundsContext | null {
        return this.getRuleContext(0, TypeNoBoundsContext);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public closureParameters(): ClosureParametersContext | null {
        return this.getRuleContext(0, ClosureParametersContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureExpression) {
             listener.enterClosureExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureExpression) {
             listener.exitClosureExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureExpression) {
            return visitor.visitClosureExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public closureParam(): ClosureParamContext[];
    public closureParam(i: number): ClosureParamContext | null;
    public closureParam(i?: number): ClosureParamContext[] | ClosureParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClosureParamContext);
        }

        return this.getRuleContext(i, ClosureParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureParameters) {
             listener.enterClosureParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureParameters) {
             listener.exitClosureParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureParameters) {
            return visitor.visitClosureParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClosureParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_closureParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterClosureParam) {
             listener.enterClosureParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitClosureParam) {
             listener.exitClosureParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitClosureParam) {
            return visitor.visitClosureParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public infiniteLoopExpression(): InfiniteLoopExpressionContext | null {
        return this.getRuleContext(0, InfiniteLoopExpressionContext);
    }
    public predicateLoopExpression(): PredicateLoopExpressionContext | null {
        return this.getRuleContext(0, PredicateLoopExpressionContext);
    }
    public predicatePatternLoopExpression(): PredicatePatternLoopExpressionContext | null {
        return this.getRuleContext(0, PredicatePatternLoopExpressionContext);
    }
    public iteratorLoopExpression(): IteratorLoopExpressionContext | null {
        return this.getRuleContext(0, IteratorLoopExpressionContext);
    }
    public loopLabel(): LoopLabelContext | null {
        return this.getRuleContext(0, LoopLabelContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_loopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLoopExpression) {
             listener.enterLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLoopExpression) {
             listener.exitLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLoopExpression) {
            return visitor.visitLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfiniteLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOOP(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LOOP, 0)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_infiniteLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInfiniteLoopExpression) {
             listener.enterInfiniteLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInfiniteLoopExpression) {
             listener.exitInfiniteLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInfiniteLoopExpression) {
            return visitor.visitInfiniteLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHILE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_predicateLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPredicateLoopExpression) {
             listener.enterPredicateLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPredicateLoopExpression) {
             listener.exitPredicateLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPredicateLoopExpression) {
            return visitor.visitPredicateLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicatePatternLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_WHILE, 0)!;
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_predicatePatternLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPredicatePatternLoopExpression) {
             listener.enterPredicatePatternLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPredicatePatternLoopExpression) {
             listener.exitPredicatePatternLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPredicatePatternLoopExpression) {
            return visitor.visitPredicatePatternLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IteratorLoopExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FOR, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext {
        return this.getRuleContext(0, BlockExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_iteratorLoopExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIteratorLoopExpression) {
             listener.enterIteratorLoopExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIteratorLoopExpression) {
             listener.exitIteratorLoopExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIteratorLoopExpression) {
            return visitor.visitIteratorLoopExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(RustParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_loopLabel;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLoopLabel) {
             listener.enterLoopLabel(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLoopLabel) {
             listener.exitLoopLabel(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLoopLabel) {
            return visitor.visitLoopLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext[];
    public blockExpression(i: number): BlockExpressionContext | null;
    public blockExpression(i?: number): BlockExpressionContext[] | BlockExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockExpressionContext);
        }

        return this.getRuleContext(i, BlockExpressionContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIfExpression) {
             listener.enterIfExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIfExpression) {
             listener.exitIfExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfLetExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_LET, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public blockExpression(): BlockExpressionContext[];
    public blockExpression(i: number): BlockExpressionContext | null;
    public blockExpression(i?: number): BlockExpressionContext[] | BlockExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockExpressionContext);
        }

        return this.getRuleContext(i, BlockExpressionContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public ifExpression(): IfExpressionContext | null {
        return this.getRuleContext(0, IfExpressionContext);
    }
    public ifLetExpression(): IfLetExpressionContext | null {
        return this.getRuleContext(0, IfLetExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_ifLetExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIfLetExpression) {
             listener.enterIfLetExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIfLetExpression) {
             listener.exitIfLetExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIfLetExpression) {
            return visitor.visitIfLetExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_MATCH, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public innerAttribute(): InnerAttributeContext[];
    public innerAttribute(i: number): InnerAttributeContext | null;
    public innerAttribute(i?: number): InnerAttributeContext[] | InnerAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InnerAttributeContext);
        }

        return this.getRuleContext(i, InnerAttributeContext);
    }
    public matchArms(): MatchArmsContext | null {
        return this.getRuleContext(0, MatchArmsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchExpression) {
             listener.enterMatchExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchExpression) {
             listener.exitMatchExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchExpression) {
            return visitor.visitMatchExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public matchArm(): MatchArmContext[];
    public matchArm(i: number): MatchArmContext | null;
    public matchArm(i?: number): MatchArmContext[] | MatchArmContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MatchArmContext);
        }

        return this.getRuleContext(i, MatchArmContext);
    }
    public FATARROW(): antlr.TerminalNode[];
    public FATARROW(i: number): antlr.TerminalNode | null;
    public FATARROW(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.FATARROW);
    	} else {
    		return this.getToken(RustParser.FATARROW, i);
    	}
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public matchArmExpression(): MatchArmExpressionContext[];
    public matchArmExpression(i: number): MatchArmExpressionContext | null;
    public matchArmExpression(i?: number): MatchArmExpressionContext[] | MatchArmExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MatchArmExpressionContext);
        }

        return this.getRuleContext(i, MatchArmExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArms;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArms) {
             listener.enterMatchArms(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArms) {
             listener.exitMatchArms(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArms) {
            return visitor.visitMatchArms(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public expressionWithBlock(): ExpressionWithBlockContext | null {
        return this.getRuleContext(0, ExpressionWithBlockContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArmExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArmExpression) {
             listener.enterMatchArmExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArmExpression) {
             listener.exitMatchArmExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArmExpression) {
            return visitor.visitMatchArmExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public matchArmGuard(): MatchArmGuardContext | null {
        return this.getRuleContext(0, MatchArmGuardContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArm;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArm) {
             listener.enterMatchArm(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArm) {
             listener.exitMatchArm(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArm) {
            return visitor.visitMatchArm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchArmGuardContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IF, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_matchArmGuard;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMatchArmGuard) {
             listener.enterMatchArmGuard(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMatchArmGuard) {
             listener.exitMatchArmGuard(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMatchArmGuard) {
            return visitor.visitMatchArmGuard(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternNoTopAlt(): PatternNoTopAltContext[];
    public patternNoTopAlt(i: number): PatternNoTopAltContext | null;
    public patternNoTopAlt(i?: number): PatternNoTopAltContext[] | PatternNoTopAltContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternNoTopAltContext);
        }

        return this.getRuleContext(i, PatternNoTopAltContext);
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.OR);
    	} else {
    		return this.getToken(RustParser.OR, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPattern) {
             listener.enterPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPattern) {
             listener.exitPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternNoTopAltContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public patternWithoutRange(): PatternWithoutRangeContext | null {
        return this.getRuleContext(0, PatternWithoutRangeContext);
    }
    public rangePattern(): RangePatternContext | null {
        return this.getRuleContext(0, RangePatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_patternNoTopAlt;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPatternNoTopAlt) {
             listener.enterPatternNoTopAlt(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPatternNoTopAlt) {
             listener.exitPatternNoTopAlt(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPatternNoTopAlt) {
            return visitor.visitPatternNoTopAlt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternWithoutRangeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literalPattern(): LiteralPatternContext | null {
        return this.getRuleContext(0, LiteralPatternContext);
    }
    public identifierPattern(): IdentifierPatternContext | null {
        return this.getRuleContext(0, IdentifierPatternContext);
    }
    public wildcardPattern(): WildcardPatternContext | null {
        return this.getRuleContext(0, WildcardPatternContext);
    }
    public restPattern(): RestPatternContext | null {
        return this.getRuleContext(0, RestPatternContext);
    }
    public structPattern(): StructPatternContext | null {
        return this.getRuleContext(0, StructPatternContext);
    }
    public tupleStructPattern(): TupleStructPatternContext | null {
        return this.getRuleContext(0, TupleStructPatternContext);
    }
    public tuplePattern(): TuplePatternContext | null {
        return this.getRuleContext(0, TuplePatternContext);
    }
    public groupedPattern(): GroupedPatternContext | null {
        return this.getRuleContext(0, GroupedPatternContext);
    }
    public slicePattern(): SlicePatternContext | null {
        return this.getRuleContext(0, SlicePatternContext);
    }
    public pathPattern(): PathPatternContext | null {
        return this.getRuleContext(0, PathPatternContext);
    }
    public macroInvocation(): MacroInvocationContext | null {
        return this.getRuleContext(0, MacroInvocationContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_patternWithoutRange;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPatternWithoutRange) {
             listener.enterPatternWithoutRange(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPatternWithoutRange) {
             listener.exitPatternWithoutRange(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPatternWithoutRange) {
            return visitor.visitPatternWithoutRange(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STRING_LITERAL, 0);
    }
    public RAW_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_STRING_LITERAL, 0);
    }
    public BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_STRING_LITERAL, 0);
    }
    public RAW_BYTE_STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_BYTE_STRING_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_literalPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLiteralPattern) {
             listener.enterLiteralPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLiteralPattern) {
             listener.exitLiteralPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralPattern) {
            return visitor.visitLiteralPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AT, 0);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_identifierPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIdentifierPattern) {
             listener.enterIdentifierPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIdentifierPattern) {
             listener.exitIdentifierPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierPattern) {
            return visitor.visitIdentifierPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WildcardPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERSCORE(): antlr.TerminalNode {
        return this.getToken(RustParser.UNDERSCORE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_wildcardPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterWildcardPattern) {
             listener.enterWildcardPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitWildcardPattern) {
             listener.exitWildcardPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitWildcardPattern) {
            return visitor.visitWildcardPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RestPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_restPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRestPattern) {
             listener.enterRestPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRestPattern) {
             listener.exitRestPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRestPattern) {
            return visitor.visitRestPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rangePattern;
    }
    public override copyFrom(ctx: RangePatternContext): void {
        super.copyFrom(ctx);
    }
}
export class InclusiveRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext[];
    public rangePatternBound(i: number): RangePatternBoundContext | null;
    public rangePatternBound(i?: number): RangePatternBoundContext[] | RangePatternBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangePatternBoundContext);
        }

        return this.getRuleContext(i, RangePatternBoundContext);
    }
    public DOTDOTEQ(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTEQ, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInclusiveRangePattern) {
             listener.enterInclusiveRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInclusiveRangePattern) {
             listener.exitInclusiveRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInclusiveRangePattern) {
            return visitor.visitInclusiveRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObsoleteRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext[];
    public rangePatternBound(i: number): RangePatternBoundContext | null;
    public rangePatternBound(i?: number): RangePatternBoundContext[] | RangePatternBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangePatternBoundContext);
        }

        return this.getRuleContext(i, RangePatternBoundContext);
    }
    public DOTDOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTDOT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterObsoleteRangePattern) {
             listener.enterObsoleteRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitObsoleteRangePattern) {
             listener.exitObsoleteRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitObsoleteRangePattern) {
            return visitor.visitObsoleteRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class HalfOpenRangePatternContext extends RangePatternContext {
    public constructor(ctx: RangePatternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public rangePatternBound(): RangePatternBoundContext {
        return this.getRuleContext(0, RangePatternBoundContext)!;
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterHalfOpenRangePattern) {
             listener.enterHalfOpenRangePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitHalfOpenRangePattern) {
             listener.exitHalfOpenRangePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitHalfOpenRangePattern) {
            return visitor.visitHalfOpenRangePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangePatternBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CHAR_LITERAL, 0);
    }
    public BYTE_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.BYTE_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.INTEGER_LITERAL, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FLOAT_LITERAL, 0);
    }
    public pathPattern(): PathPatternContext | null {
        return this.getRuleContext(0, PathPatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rangePatternBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRangePatternBound) {
             listener.enterRangePatternBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRangePatternBound) {
             listener.exitRangePatternBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRangePatternBound) {
            return visitor.visitRangePatternBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(RustParser.RCURLYBRACE, 0)!;
    }
    public structPatternElements(): StructPatternElementsContext | null {
        return this.getRuleContext(0, StructPatternElementsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPattern) {
             listener.enterStructPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPattern) {
             listener.exitStructPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPattern) {
            return visitor.visitStructPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structPatternFields(): StructPatternFieldsContext | null {
        return this.getRuleContext(0, StructPatternFieldsContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public structPatternEtCetera(): StructPatternEtCeteraContext | null {
        return this.getRuleContext(0, StructPatternEtCeteraContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternElements;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternElements) {
             listener.enterStructPatternElements(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternElements) {
             listener.exitStructPatternElements(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternElements) {
            return visitor.visitStructPatternElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public structPatternField(): StructPatternFieldContext[];
    public structPatternField(i: number): StructPatternFieldContext | null;
    public structPatternField(i?: number): StructPatternFieldContext[] | StructPatternFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructPatternFieldContext);
        }

        return this.getRuleContext(i, StructPatternFieldContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternFields;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternFields) {
             listener.enterStructPatternFields(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternFields) {
             listener.exitStructPatternFields(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternFields) {
            return visitor.visitStructPatternFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tupleIndex(): TupleIndexContext | null {
        return this.getRuleContext(0, TupleIndexContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternField;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternField) {
             listener.enterStructPatternField(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternField) {
             listener.exitStructPatternField(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternField) {
            return visitor.visitStructPatternField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructPatternEtCeteraContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOT, 0)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_structPatternEtCetera;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterStructPatternEtCetera) {
             listener.enterStructPatternEtCetera(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitStructPatternEtCetera) {
             listener.exitStructPatternEtCetera(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitStructPatternEtCetera) {
            return visitor.visitStructPatternEtCetera(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext {
        return this.getRuleContext(0, PathInExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tupleStructItems(): TupleStructItemsContext | null {
        return this.getRuleContext(0, TupleStructItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStructPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStructPattern) {
             listener.enterTupleStructPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStructPattern) {
             listener.exitTupleStructPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStructPattern) {
            return visitor.visitTupleStructPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleStructItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleStructItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleStructItems) {
             listener.enterTupleStructItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleStructItems) {
             listener.exitTupleStructItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleStructItems) {
            return visitor.visitTupleStructItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TuplePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public tuplePatternItems(): TuplePatternItemsContext | null {
        return this.getRuleContext(0, TuplePatternItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tuplePattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTuplePattern) {
             listener.enterTuplePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTuplePattern) {
             listener.exitTuplePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTuplePattern) {
            return visitor.visitTuplePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TuplePatternItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public restPattern(): RestPatternContext | null {
        return this.getRuleContext(0, RestPatternContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tuplePatternItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTuplePatternItems) {
             listener.enterTuplePatternItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTuplePatternItems) {
             listener.exitTuplePatternItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTuplePatternItems) {
            return visitor.visitTuplePatternItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupedPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public pattern(): PatternContext {
        return this.getRuleContext(0, PatternContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_groupedPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGroupedPattern) {
             listener.enterGroupedPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGroupedPattern) {
             listener.exitGroupedPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGroupedPattern) {
            return visitor.visitGroupedPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SlicePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public slicePatternItems(): SlicePatternItemsContext | null {
        return this.getRuleContext(0, SlicePatternItemsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_slicePattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSlicePattern) {
             listener.enterSlicePattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSlicePattern) {
             listener.exitSlicePattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSlicePattern) {
            return visitor.visitSlicePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SlicePatternItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern(): PatternContext[];
    public pattern(i: number): PatternContext | null;
    public pattern(i?: number): PatternContext[] | PatternContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternContext);
        }

        return this.getRuleContext(i, PatternContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_slicePatternItems;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSlicePatternItems) {
             listener.enterSlicePatternItems(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSlicePatternItems) {
             listener.exitSlicePatternItems(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSlicePatternItems) {
            return visitor.visitSlicePatternItems(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathInExpression(): PathInExpressionContext | null {
        return this.getRuleContext(0, PathInExpressionContext);
    }
    public qualifiedPathInExpression(): QualifiedPathInExpressionContext | null {
        return this.getRuleContext(0, QualifiedPathInExpressionContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathPattern;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathPattern) {
             listener.enterPathPattern(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathPattern) {
             listener.exitPathPattern(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathPattern) {
            return visitor.visitPathPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Type_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public unit_type(): Unit_typeContext | null {
        return this.getRuleContext(0, Unit_typeContext);
    }
    public referenceType(): ReferenceTypeContext | null {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_type_;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterType_) {
             listener.enterType_(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitType_) {
             listener.exitType_(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Unit_typeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public WHITESPACE(): antlr.TerminalNode[];
    public WHITESPACE(i: number): antlr.TerminalNode | null;
    public WHITESPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.WHITESPACE);
    	} else {
    		return this.getToken(RustParser.WHITESPACE, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_unit_type;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterUnit_type) {
             listener.enterUnit_type(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitUnit_type) {
             listener.exitUnit_type(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitUnit_type) {
            return visitor.visitUnit_type(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeNoBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parenthesizedType(): ParenthesizedTypeContext | null {
        return this.getRuleContext(0, ParenthesizedTypeContext);
    }
    public implTraitTypeOneBound(): ImplTraitTypeOneBoundContext | null {
        return this.getRuleContext(0, ImplTraitTypeOneBoundContext);
    }
    public traitObjectTypeOneBound(): TraitObjectTypeOneBoundContext | null {
        return this.getRuleContext(0, TraitObjectTypeOneBoundContext);
    }
    public typePath(): TypePathContext | null {
        return this.getRuleContext(0, TypePathContext);
    }
    public tupleType(): TupleTypeContext | null {
        return this.getRuleContext(0, TupleTypeContext);
    }
    public neverType(): NeverTypeContext | null {
        return this.getRuleContext(0, NeverTypeContext);
    }
    public rawPointerType(): RawPointerTypeContext | null {
        return this.getRuleContext(0, RawPointerTypeContext);
    }
    public referenceType(): ReferenceTypeContext | null {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    public arrayType(): ArrayTypeContext | null {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    public sliceType(): SliceTypeContext | null {
        return this.getRuleContext(0, SliceTypeContext);
    }
    public inferredType(): InferredTypeContext | null {
        return this.getRuleContext(0, InferredTypeContext);
    }
    public qualifiedPathInType(): QualifiedPathInTypeContext | null {
        return this.getRuleContext(0, QualifiedPathInTypeContext);
    }
    public bareFunctionType(): BareFunctionTypeContext | null {
        return this.getRuleContext(0, BareFunctionTypeContext);
    }
    public macroInvocation(): MacroInvocationContext | null {
        return this.getRuleContext(0, MacroInvocationContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeNoBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeNoBounds) {
             listener.enterTypeNoBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeNoBounds) {
             listener.exitTypeNoBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeNoBounds) {
            return visitor.visitTypeNoBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParenthesizedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_parenthesizedType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterParenthesizedType) {
             listener.enterParenthesizedType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitParenthesizedType) {
             listener.exitParenthesizedType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedType) {
            return visitor.visitParenthesizedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NeverTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(RustParser.NOT, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_neverType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterNeverType) {
             listener.enterNeverType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitNeverType) {
             listener.exitNeverType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitNeverType) {
            return visitor.visitNeverType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TupleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_tupleType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTupleType) {
             listener.enterTupleType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTupleType) {
             listener.exitTupleType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTupleType) {
            return visitor.visitTupleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(RustParser.SEMI, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_arrayType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterArrayType) {
             listener.enterArrayType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitArrayType) {
             listener.exitArrayType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SliceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.LSQUAREBRACKET, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public RSQUAREBRACKET(): antlr.TerminalNode {
        return this.getToken(RustParser.RSQUAREBRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_sliceType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSliceType) {
             listener.enterSliceType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSliceType) {
             listener.exitSliceType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSliceType) {
            return visitor.visitSliceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReferenceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(RustParser.AND, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_referenceType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterReferenceType) {
             listener.enterReferenceType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitReferenceType) {
             listener.exitReferenceType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitReferenceType) {
            return visitor.visitReferenceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RawPointerTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(RustParser.STAR, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_rawPointerType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterRawPointerType) {
             listener.enterRawPointerType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitRawPointerType) {
             listener.exitRawPointerType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitRawPointerType) {
            return visitor.visitRawPointerType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BareFunctionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionTypeQualifiers(): FunctionTypeQualifiersContext {
        return this.getRuleContext(0, FunctionTypeQualifiersContext)!;
    }
    public KW_FN(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_FN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public functionParametersMaybeNamedVariadic(): FunctionParametersMaybeNamedVariadicContext | null {
        return this.getRuleContext(0, FunctionParametersMaybeNamedVariadicContext);
    }
    public bareFunctionReturnType(): BareFunctionReturnTypeContext | null {
        return this.getRuleContext(0, BareFunctionReturnTypeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_bareFunctionType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBareFunctionType) {
             listener.enterBareFunctionType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBareFunctionType) {
             listener.exitBareFunctionType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBareFunctionType) {
            return visitor.visitBareFunctionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionTypeQualifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public abi(): AbiContext | null {
        return this.getRuleContext(0, AbiContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionTypeQualifiers;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionTypeQualifiers) {
             listener.enterFunctionTypeQualifiers(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionTypeQualifiers) {
             listener.exitFunctionTypeQualifiers(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionTypeQualifiers) {
            return visitor.visitFunctionTypeQualifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BareFunctionReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RARROW(): antlr.TerminalNode {
        return this.getToken(RustParser.RARROW, 0)!;
    }
    public typeNoBounds(): TypeNoBoundsContext {
        return this.getRuleContext(0, TypeNoBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_bareFunctionReturnType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterBareFunctionReturnType) {
             listener.enterBareFunctionReturnType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitBareFunctionReturnType) {
             listener.exitBareFunctionReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitBareFunctionReturnType) {
            return visitor.visitBareFunctionReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParametersMaybeNamedVariadicContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedFunctionParameters(): MaybeNamedFunctionParametersContext | null {
        return this.getRuleContext(0, MaybeNamedFunctionParametersContext);
    }
    public maybeNamedFunctionParametersVariadic(): MaybeNamedFunctionParametersVariadicContext | null {
        return this.getRuleContext(0, MaybeNamedFunctionParametersVariadicContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_functionParametersMaybeNamedVariadic;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterFunctionParametersMaybeNamedVariadic) {
             listener.enterFunctionParametersMaybeNamedVariadic(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitFunctionParametersMaybeNamedVariadic) {
             listener.exitFunctionParametersMaybeNamedVariadic(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParametersMaybeNamedVariadic) {
            return visitor.visitFunctionParametersMaybeNamedVariadic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedFunctionParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedParam(): MaybeNamedParamContext[];
    public maybeNamedParam(i: number): MaybeNamedParamContext | null;
    public maybeNamedParam(i?: number): MaybeNamedParamContext[] | MaybeNamedParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MaybeNamedParamContext);
        }

        return this.getRuleContext(i, MaybeNamedParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedFunctionParameters;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedFunctionParameters) {
             listener.enterMaybeNamedFunctionParameters(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedFunctionParameters) {
             listener.exitMaybeNamedFunctionParameters(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedFunctionParameters) {
            return visitor.visitMaybeNamedFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedParam;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedParam) {
             listener.enterMaybeNamedParam(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedParam) {
             listener.exitMaybeNamedParam(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedParam) {
            return visitor.visitMaybeNamedParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MaybeNamedFunctionParametersVariadicContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public maybeNamedParam(): MaybeNamedParamContext[];
    public maybeNamedParam(i: number): MaybeNamedParamContext | null;
    public maybeNamedParam(i?: number): MaybeNamedParamContext[] | MaybeNamedParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MaybeNamedParamContext);
        }

        return this.getRuleContext(i, MaybeNamedParamContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public DOTDOTDOT(): antlr.TerminalNode {
        return this.getToken(RustParser.DOTDOTDOT, 0)!;
    }
    public outerAttribute(): OuterAttributeContext[];
    public outerAttribute(i: number): OuterAttributeContext | null;
    public outerAttribute(i?: number): OuterAttributeContext[] | OuterAttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OuterAttributeContext);
        }

        return this.getRuleContext(i, OuterAttributeContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_maybeNamedFunctionParametersVariadic;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMaybeNamedFunctionParametersVariadic) {
             listener.enterMaybeNamedFunctionParametersVariadic(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMaybeNamedFunctionParametersVariadic) {
             listener.exitMaybeNamedFunctionParametersVariadic(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMaybeNamedFunctionParametersVariadic) {
            return visitor.visitMaybeNamedFunctionParametersVariadic(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitObjectTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParamBounds(): TypeParamBoundsContext {
        return this.getRuleContext(0, TypeParamBoundsContext)!;
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitObjectType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitObjectType) {
             listener.enterTraitObjectType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitObjectType) {
             listener.exitTraitObjectType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitObjectType) {
            return visitor.visitTraitObjectType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitObjectTypeOneBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public traitBound(): TraitBoundContext {
        return this.getRuleContext(0, TraitBoundContext)!;
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitObjectTypeOneBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitObjectTypeOneBound) {
             listener.enterTraitObjectTypeOneBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitObjectTypeOneBound) {
             listener.exitTraitObjectTypeOneBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitObjectTypeOneBound) {
            return visitor.visitTraitObjectTypeOneBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplTraitTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public typeParamBounds(): TypeParamBoundsContext {
        return this.getRuleContext(0, TypeParamBoundsContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implTraitType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplTraitType) {
             listener.enterImplTraitType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplTraitType) {
             listener.exitImplTraitType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplTraitType) {
            return visitor.visitImplTraitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplTraitTypeOneBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IMPL(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_IMPL, 0)!;
    }
    public traitBound(): TraitBoundContext {
        return this.getRuleContext(0, TraitBoundContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_implTraitTypeOneBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterImplTraitTypeOneBound) {
             listener.enterImplTraitTypeOneBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitImplTraitTypeOneBound) {
             listener.exitImplTraitTypeOneBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitImplTraitTypeOneBound) {
            return visitor.visitImplTraitTypeOneBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InferredTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERSCORE(): antlr.TerminalNode {
        return this.getToken(RustParser.UNDERSCORE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_inferredType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterInferredType) {
             listener.enterInferredType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitInferredType) {
             listener.exitInferredType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitInferredType) {
            return visitor.visitInferredType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParamBound(): TypeParamBoundContext[];
    public typeParamBound(i: number): TypeParamBoundContext | null;
    public typeParamBound(i?: number): TypeParamBoundContext[] | TypeParamBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParamBoundContext);
        }

        return this.getRuleContext(i, TypeParamBoundContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PLUS);
    	} else {
    		return this.getToken(RustParser.PLUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParamBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParamBounds) {
             listener.enterTypeParamBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParamBounds) {
             listener.exitTypeParamBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParamBounds) {
            return visitor.visitTypeParamBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParamBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public traitBound(): TraitBoundContext | null {
        return this.getRuleContext(0, TraitBoundContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typeParamBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypeParamBound) {
             listener.enterTypeParamBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypeParamBound) {
             listener.exitTypeParamBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParamBound) {
            return visitor.visitTypeParamBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraitBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typePath(): TypePathContext {
        return this.getRuleContext(0, TypePathContext)!;
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.QUESTION, 0);
    }
    public forLifetimes(): ForLifetimesContext | null {
        return this.getRuleContext(0, ForLifetimesContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_traitBound;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTraitBound) {
             listener.enterTraitBound(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTraitBound) {
             listener.exitTraitBound(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTraitBound) {
            return visitor.visitTraitBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeBoundsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext[];
    public lifetime(i: number): LifetimeContext | null;
    public lifetime(i?: number): LifetimeContext[] | LifetimeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeContext);
        }

        return this.getRuleContext(i, LifetimeContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PLUS);
    	} else {
    		return this.getToken(RustParser.PLUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetimeBounds;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetimeBounds) {
             listener.enterLifetimeBounds(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetimeBounds) {
             listener.exitLifetimeBounds(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeBounds) {
            return visitor.visitLifetimeBounds(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public KW_STATICLIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATICLIFETIME, 0);
    }
    public KW_UNDERLINELIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNDERLINELIFETIME, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_lifetime;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterLifetime) {
             listener.enterLifetime(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitLifetime) {
             listener.exitLifetime(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitLifetime) {
            return visitor.visitLifetime(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimplePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simplePathSegment(): SimplePathSegmentContext[];
    public simplePathSegment(i: number): SimplePathSegmentContext | null;
    public simplePathSegment(i?: number): SimplePathSegmentContext[] | SimplePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SimplePathSegmentContext);
        }

        return this.getRuleContext(i, SimplePathSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_simplePath;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSimplePath) {
             listener.enterSimplePath(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSimplePath) {
             listener.exitSimplePath(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSimplePath) {
            return visitor.visitSimplePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimplePathSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_simplePathSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterSimplePathSegment) {
             listener.enterSimplePathSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitSimplePathSegment) {
             listener.exitSimplePathSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitSimplePathSegment) {
            return visitor.visitSimplePathSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathInExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathExprSegment(): PathExprSegmentContext[];
    public pathExprSegment(i: number): PathExprSegmentContext | null;
    public pathExprSegment(i?: number): PathExprSegmentContext[] | PathExprSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprSegmentContext);
        }

        return this.getRuleContext(i, PathExprSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathInExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathInExpression) {
             listener.enterPathInExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathInExpression) {
             listener.exitPathInExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathInExpression) {
            return visitor.visitPathInExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathExprSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        return this.getRuleContext(0, PathIdentSegmentContext)!;
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public genericArgs(): GenericArgsContext | null {
        return this.getRuleContext(0, GenericArgsContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathExprSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathExprSegment) {
             listener.enterPathExprSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathExprSegment) {
             listener.exitPathExprSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathExprSegment) {
            return visitor.visitPathExprSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathIdentSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SELFTYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFTYPE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_pathIdentSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterPathIdentSegment) {
             listener.enterPathIdentSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitPathIdentSegment) {
             listener.exitPathIdentSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitPathIdentSegment) {
            return visitor.visitPathIdentSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public genericArgsLifetimes(): GenericArgsLifetimesContext | null {
        return this.getRuleContext(0, GenericArgsLifetimesContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public genericArgsTypes(): GenericArgsTypesContext | null {
        return this.getRuleContext(0, GenericArgsTypesContext);
    }
    public genericArgsBindings(): GenericArgsBindingsContext | null {
        return this.getRuleContext(0, GenericArgsBindingsContext);
    }
    public genericArg(): GenericArgContext[];
    public genericArg(i: number): GenericArgContext | null;
    public genericArg(i?: number): GenericArgContext[] | GenericArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericArgContext);
        }

        return this.getRuleContext(i, GenericArgContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgs;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgs) {
             listener.enterGenericArgs(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgs) {
             listener.exitGenericArgs(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgs) {
            return visitor.visitGenericArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext | null {
        return this.getRuleContext(0, LifetimeContext);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public genericArgsConst(): GenericArgsConstContext | null {
        return this.getRuleContext(0, GenericArgsConstContext);
    }
    public genericArgsBinding(): GenericArgsBindingContext | null {
        return this.getRuleContext(0, GenericArgsBindingContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArg;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArg) {
             listener.enterGenericArg(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArg) {
             listener.exitGenericArg(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArg) {
            return visitor.visitGenericArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsConstContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockExpression(): BlockExpressionContext | null {
        return this.getRuleContext(0, BlockExpressionContext);
    }
    public literalExpression(): LiteralExpressionContext | null {
        return this.getRuleContext(0, LiteralExpressionContext);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public simplePathSegment(): SimplePathSegmentContext | null {
        return this.getRuleContext(0, SimplePathSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsConst;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsConst) {
             listener.enterGenericArgsConst(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsConst) {
             listener.exitGenericArgsConst(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsConst) {
            return visitor.visitGenericArgsConst(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsLifetimesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lifetime(): LifetimeContext[];
    public lifetime(i: number): LifetimeContext | null;
    public lifetime(i?: number): LifetimeContext[] | LifetimeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeContext);
        }

        return this.getRuleContext(i, LifetimeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsLifetimes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsLifetimes) {
             listener.enterGenericArgsLifetimes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsLifetimes) {
             listener.exitGenericArgsLifetimes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsLifetimes) {
            return visitor.visitGenericArgsLifetimes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsTypes;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsTypes) {
             listener.enterGenericArgsTypes(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsTypes) {
             listener.exitGenericArgsTypes(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsTypes) {
            return visitor.visitGenericArgsTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsBindingsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public genericArgsBinding(): GenericArgsBindingContext[];
    public genericArgsBinding(i: number): GenericArgsBindingContext | null;
    public genericArgsBinding(i?: number): GenericArgsBindingContext[] | GenericArgsBindingContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GenericArgsBindingContext);
        }

        return this.getRuleContext(i, GenericArgsBindingContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsBindings;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsBindings) {
             listener.enterGenericArgsBindings(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsBindings) {
             listener.exitGenericArgsBindings(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsBindings) {
            return visitor.visitGenericArgsBindings(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericArgsBindingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(RustParser.EQ, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_genericArgsBinding;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterGenericArgsBinding) {
             listener.enterGenericArgsBinding(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitGenericArgsBinding) {
             listener.exitGenericArgsBinding(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitGenericArgsBinding) {
            return visitor.visitGenericArgsBinding(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathInExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        return this.getRuleContext(0, QualifiedPathTypeContext)!;
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public pathExprSegment(): PathExprSegmentContext[];
    public pathExprSegment(i: number): PathExprSegmentContext | null;
    public pathExprSegment(i?: number): PathExprSegmentContext[] | PathExprSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprSegmentContext);
        }

        return this.getRuleContext(i, PathExprSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathInExpression;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathInExpression) {
             listener.enterQualifiedPathInExpression(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathInExpression) {
             listener.exitQualifiedPathInExpression(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathInExpression) {
            return visitor.visitQualifiedPathInExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(RustParser.LT, 0)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(RustParser.GT, 0)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public typePath(): TypePathContext | null {
        return this.getRuleContext(0, TypePathContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathType) {
             listener.enterQualifiedPathType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathType) {
             listener.exitQualifiedPathType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathType) {
            return visitor.visitQualifiedPathType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedPathInTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedPathType(): QualifiedPathTypeContext {
        return this.getRuleContext(0, QualifiedPathTypeContext)!;
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public typePathSegment(): TypePathSegmentContext[];
    public typePathSegment(i: number): TypePathSegmentContext | null;
    public typePathSegment(i?: number): TypePathSegmentContext[] | TypePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypePathSegmentContext);
        }

        return this.getRuleContext(i, TypePathSegmentContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_qualifiedPathInType;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterQualifiedPathInType) {
             listener.enterQualifiedPathInType(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitQualifiedPathInType) {
             listener.exitQualifiedPathInType(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedPathInType) {
            return visitor.visitQualifiedPathInType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typePathSegment(): TypePathSegmentContext[];
    public typePathSegment(i: number): TypePathSegmentContext | null;
    public typePathSegment(i?: number): TypePathSegmentContext[] | TypePathSegmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypePathSegmentContext);
        }

        return this.getRuleContext(i, TypePathSegmentContext);
    }
    public PATHSEP(): antlr.TerminalNode[];
    public PATHSEP(i: number): antlr.TerminalNode | null;
    public PATHSEP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.PATHSEP);
    	} else {
    		return this.getToken(RustParser.PATHSEP, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePath;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePath) {
             listener.enterTypePath(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePath) {
             listener.exitTypePath(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePath) {
            return visitor.visitTypePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathSegmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathIdentSegment(): PathIdentSegmentContext {
        return this.getRuleContext(0, PathIdentSegmentContext)!;
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public genericArgs(): GenericArgsContext | null {
        return this.getRuleContext(0, GenericArgsContext);
    }
    public typePathFn(): TypePathFnContext | null {
        return this.getRuleContext(0, TypePathFnContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathSegment;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathSegment) {
             listener.enterTypePathSegment(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathSegment) {
             listener.exitTypePathSegment(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathSegment) {
            return visitor.visitTypePathSegment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathFnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(RustParser.RPAREN, 0)!;
    }
    public typePathInputs(): TypePathInputsContext | null {
        return this.getRuleContext(0, TypePathInputsContext);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public type_(): Type_Context | null {
        return this.getRuleContext(0, Type_Context);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathFn;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathFn) {
             listener.enterTypePathFn(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathFn) {
             listener.exitTypePathFn(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathFn) {
            return visitor.visitTypePathFn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypePathInputsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context[];
    public type_(i: number): Type_Context | null;
    public type_(i?: number): Type_Context[] | Type_Context | null {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }

        return this.getRuleContext(i, Type_Context);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.COMMA);
    	} else {
    		return this.getToken(RustParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_typePathInputs;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterTypePathInputs) {
             listener.enterTypePathInputs(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitTypePathInputs) {
             listener.exitTypePathInputs(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitTypePathInputs) {
            return visitor.visitTypePathInputs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VisibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PUB(): antlr.TerminalNode {
        return this.getToken(RustParser.KW_PUB, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RPAREN, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IN, 0);
    }
    public simplePath(): SimplePathContext | null {
        return this.getRuleContext(0, SimplePathContext);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_visibility;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterVisibility) {
             listener.enterVisibility(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitVisibility) {
             listener.exitVisibility(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitVisibility) {
            return visitor.visitVisibility(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NON_KEYWORD_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NON_KEYWORD_IDENTIFIER, 0);
    }
    public RAW_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RAW_IDENTIFIER, 0);
    }
    public KW_MACRORULES(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRORULES, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_identifier;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AS, 0);
    }
    public KW_BREAK(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BREAK, 0);
    }
    public KW_CONST(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONST, 0);
    }
    public KW_CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CONTINUE, 0);
    }
    public KW_CRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_CRATE, 0);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ELSE, 0);
    }
    public KW_ENUM(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ENUM, 0);
    }
    public KW_EXTERN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_EXTERN, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FALSE, 0);
    }
    public KW_FN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FN, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FOR, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IF, 0);
    }
    public KW_IMPL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IMPL, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_IN, 0);
    }
    public KW_LET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_LET, 0);
    }
    public KW_LOOP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_LOOP, 0);
    }
    public KW_MATCH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MATCH, 0);
    }
    public KW_MOD(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOD, 0);
    }
    public KW_MOVE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MOVE, 0);
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MUT, 0);
    }
    public KW_PUB(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_PUB, 0);
    }
    public KW_REF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_REF, 0);
    }
    public KW_RETURN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_RETURN, 0);
    }
    public KW_SELFVALUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFVALUE, 0);
    }
    public KW_SELFTYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SELFTYPE, 0);
    }
    public KW_STATIC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATIC, 0);
    }
    public KW_STRUCT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STRUCT, 0);
    }
    public KW_SUPER(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_SUPER, 0);
    }
    public KW_TRAIT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRAIT, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRUE, 0);
    }
    public KW_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TYPE, 0);
    }
    public KW_UNSAFE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSAFE, 0);
    }
    public KW_USE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_USE, 0);
    }
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_WHERE, 0);
    }
    public KW_WHILE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_WHILE, 0);
    }
    public KW_ASYNC(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ASYNC, 0);
    }
    public KW_AWAIT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_AWAIT, 0);
    }
    public KW_DYN(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DYN, 0);
    }
    public KW_ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_ABSTRACT, 0);
    }
    public KW_BECOME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BECOME, 0);
    }
    public KW_BOX(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_BOX, 0);
    }
    public KW_DO(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DO, 0);
    }
    public KW_FINAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_FINAL, 0);
    }
    public KW_MACRO(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRO, 0);
    }
    public KW_OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_OVERRIDE, 0);
    }
    public KW_PRIV(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_PRIV, 0);
    }
    public KW_TYPEOF(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TYPEOF, 0);
    }
    public KW_UNSIZED(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNSIZED, 0);
    }
    public KW_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_VIRTUAL, 0);
    }
    public KW_YIELD(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_YIELD, 0);
    }
    public KW_TRY(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_TRY, 0);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNION, 0);
    }
    public KW_STATICLIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_STATICLIFETIME, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_keyword;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroIdentifierLikeTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_MACRORULES(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_MACRORULES, 0);
    }
    public KW_UNDERLINELIFETIME(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_UNDERLINELIFETIME, 0);
    }
    public KW_DOLLARCRATE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.KW_DOLLARCRATE, 0);
    }
    public LIFETIME_OR_LABEL(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LIFETIME_OR_LABEL, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroIdentifierLikeToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroIdentifierLikeToken) {
             listener.enterMacroIdentifierLikeToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroIdentifierLikeToken) {
             listener.exitMacroIdentifierLikeToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroIdentifierLikeToken) {
            return visitor.visitMacroIdentifierLikeToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroLiteralTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literalExpression(): LiteralExpressionContext {
        return this.getRuleContext(0, LiteralExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroLiteralToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroLiteralToken) {
             listener.enterMacroLiteralToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroLiteralToken) {
             listener.exitMacroLiteralToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroLiteralToken) {
            return visitor.visitMacroLiteralToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MacroPunctuationTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUS, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENT, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARET, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NOT, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OR, 0);
    }
    public OROR(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OROR, 0);
    }
    public PLUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PLUSEQ, 0);
    }
    public MINUSEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.MINUSEQ, 0);
    }
    public STAREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.STAREQ, 0);
    }
    public SLASHEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SLASHEQ, 0);
    }
    public PERCENTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PERCENTEQ, 0);
    }
    public CARETEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.CARETEQ, 0);
    }
    public ANDEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.ANDEQ, 0);
    }
    public OREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.OREQ, 0);
    }
    public SHLEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHLEQ, 0);
    }
    public SHREQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SHREQ, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQ, 0);
    }
    public EQEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.EQEQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.NE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.LE, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.AT, 0);
    }
    public UNDERSCORE(): antlr.TerminalNode | null {
        return this.getToken(RustParser.UNDERSCORE, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOT, 0);
    }
    public DOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOT, 0);
    }
    public DOTDOTDOT(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTDOT, 0);
    }
    public DOTDOTEQ(): antlr.TerminalNode | null {
        return this.getToken(RustParser.DOTDOTEQ, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COMMA, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(RustParser.SEMI, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustParser.COLON, 0);
    }
    public PATHSEP(): antlr.TerminalNode | null {
        return this.getToken(RustParser.PATHSEP, 0);
    }
    public RARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.RARROW, 0);
    }
    public FATARROW(): antlr.TerminalNode | null {
        return this.getToken(RustParser.FATARROW, 0);
    }
    public POUND(): antlr.TerminalNode | null {
        return this.getToken(RustParser.POUND, 0);
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_macroPunctuationToken;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterMacroPunctuationToken) {
             listener.enterMacroPunctuationToken(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitMacroPunctuationToken) {
             listener.exitMacroPunctuationToken(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitMacroPunctuationToken) {
            return visitor.visitMacroPunctuationToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.LT);
    	} else {
    		return this.getToken(RustParser.LT, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shl;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShl) {
             listener.enterShl(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShl) {
             listener.exitShl(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShl) {
            return visitor.visitShl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustParser.GT);
    	} else {
    		return this.getToken(RustParser.GT, i);
    	}
    }
    public override get ruleIndex(): number {
        return RustParser.RULE_shr;
    }
    public override enterRule(listener: RustParserListener): void {
        if(listener.enterShr) {
             listener.enterShr(this);
        }
    }
    public override exitRule(listener: RustParserListener): void {
        if(listener.exitShr) {
             listener.exitShr(this);
        }
    }
    public override accept<Result>(visitor: RustParserVisitor<Result>): Result | null {
        if (visitor.visitShr) {
            return visitor.visitShr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
