# js-common-tools

A common javascript tool lib for development

_initial commit on 21st Dec 2017_


### 1 Modules

| |Name|Description|
|---:|:---|:---|
|1|Time|provides a set of time-format functions.|
|2|Uid|generating unique identifiers.|
|3|RegEx|functions for string validating & replacement.|
|4|String|extend functions of string.|
|5|Number|extend functions of number.|
|6|Ajax|AJAX functions for data interchange.|
|7|File|file handling functions.|
|8|Task|provides chain operations & other features for functions.|


### 2 Changelog & Version Control

`v0.3.4` on 25 Feb 2018: update module `task`. 

`v0.3.3` on 23 Feb 2018: modify module `task`. 

`v0.3.2` on 23 Feb 2018: add module `task`. 

`v0.3.1` on 21 Feb 2018: add module `file`. 

`v0.3.0` on 21 Feb 2018: add module `ajax` & rebase test environment. 

`v0.2.7` on 16 Feb 2018: add `number` extend module. 

`v0.2.6` on 14 Feb 2018: add `string` extend module. 

`v0.2.5` on 11 Feb 2018: add webpack compress module. 

`v0.2.4` on 11 Feb 2018: update module `time`. 

`v0.2.3` on 11 Feb 2018: update module `regex`. 

`v0.2.2` on 10 Feb 2018: add module `uid` `regex`. 
 
`v0.2.0` on 10 Feb 2018: add module `time`.  

`v0.1.0` on 10 Feb 2018: rebase project structure.


### 3 Module Testing

First things first, you need to install dependencies: 

```bash
npm install
```

To test features of modules listed above, just code in test_body.js and run the following command: 

```bash
npm run autotest
```

### 4 Documentation

After installing dependencies, run the following command: 

```bash
npm run doc
```

> Visit `dist/docs/index.html` or `http://localhost:9000/docs/index.html` if you are in test environment.

### 5 Build

After installing dependencies, run the following command: 

```bash
npm run build
```

> Visit `dist/js-common-tools.min.js`.
