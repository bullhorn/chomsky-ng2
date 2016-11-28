// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var VERSION:string;
declare var ENV:string;

interface SystemJS {
    import:(path?:string) => Promise<any>;
}

declare module 'chomsky/lib/chomsky' {
    export var Chomsky:any;
}

interface Chomsky {
    dictionaryManager:any;
    onLocaleChange:any;
    formats:any;
    location:string;
    currentLocale:string;
    setLocation(location?:any):void;
    use(locale?:string):any;
    translate(key?:string, interpolation?:any):any;
    format(string?:any, format?:string, mask?:string):any;
    formatDate(date?:Date, format?:string, mask?:string);
    formatCurrency(value?:any, format?:string, localeOverride?:string):any;
    formatNumber(numberString?:string, format?:string):any;
}

interface GlobalEnvironment {
    ENV;
    VERSION;
}

interface WebpackModule {
    hot:{
        data?:any,
        idle:any,
        accept(dependencies?:string | string[], callback?:(updatedDependencies?:any) => void):void;
        decline(dependencies?:string | string[]):void;
        dispose(callback?:(data?:any) => void):void;
        addDisposeHandler(callback?:(data?:any) => void):void;
        removeDisposeHandler(callback?:(data?:any) => void):void;
        check(autoApply?:any, callback?:(err?:Error, outdatedModules?:any[]) => void):void;
        apply(options?:any, callback?:(err?:Error, outdatedModules?:any[]) => void):void;
        status(callback?:(status?:string) => void):void | string;
        removeStatusHandler(callback?:(status?:string) => void):void;
    };
}

interface WebpackRequire extends NodeRequireFunction {
    context(file:string, flag?:boolean, exp?:RegExp):any;
}

// Extend typings
interface NodeRequire extends WebpackRequire {
}
interface NodeModule extends WebpackModule {
}
interface Global extends GlobalEnvironment {
}