// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({46:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */function () {
    function Person(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 50) + 5001;
    }
    Person.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearBirth;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getEmail = function () {
        return this.email;
    };
    Person.prototype.setEmail = function (email) {
        if (!email.includes("@")) {
            throw new Error("Email Inválido");
        }
        this.email = email;
    };
    return Person;
}();
exports.Person = Person;
},{}],42:[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Person_1 = require("../Person");
var Student = /** @class */function (_super) {
    __extends(Student, _super);
    function Student(name, course) {
        var _this = _super.call(this, name) || this;
        _this.course = course;
        return _this;
    }
    return Student;
}(Person_1.Person);
exports.Student = Student;
},{"../Person":46}],38:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */function () {
    function Course(name) {
        this.id = Math.floor(Math.random() * 5000);
        this.name = name;
    }
    return Course;
}();
exports.Course = Course;
},{}],41:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var Subject = /** @class */function () {
    function Subject(name, course) {
        this.name = name;
        this.course = course;
        this.name = name;
        this.course = course;
        this.id = Math.floor(Math.random() * 5000);
    }
    return Subject;
}();
exports.Subject = Subject;
},{}],47:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registries = exports.subjects = exports.courses = exports.professors = exports.students = void 0;
var Student_1 = require("./student/Student");
var Course_1 = require("./course/Course");
var Subject_1 = require("./subject/Subject");
exports.students = [];
exports.professors = [];
var bsi = new Course_1.Course("BSI");
var tsi = new Course_1.Course("TSI");
var licenciatura = new Course_1.Course("Licenciatura");
exports.courses = [];
exports.courses.push(bsi, tsi, licenciatura);
var poo = new Subject_1.Subject("POO", bsi);
var web = new Subject_1.Subject("Web", tsi);
exports.subjects = [];
exports.subjects.push(poo, web);
var student1 = new Student_1.Student("Adair", tsi);
var student2 = new Student_1.Student("Rohlig", bsi);
exports.students.push(student1, student2);
exports.registries = [];
},{"./student/Student":42,"./course/Course":38,"./subject/Subject":41}],43:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
var database_1 = require("../database");
var StudentService = /** @class */function () {
    function StudentService() {}
    StudentService.prototype.saveStudent = function (student) {
        database_1.students.push(student);
    };
    StudentService.prototype.listStudent = function () {
        return database_1.students;
    };
    StudentService.prototype.getById = function (id) {
        for (var _i = 0, students_1 = database_1.students; _i < students_1.length; _i++) {
            var student = students_1[_i];
            if (student.id == id) {
                return student;
            }
        }
        throw new Error("Estudante não Encontrado");
    };
    return StudentService;
}();
exports.StudentService = StudentService;
},{"../database":47}],40:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectService = void 0;
var database_1 = require("../database");
var SubjectService = /** @class */function () {
    function SubjectService() {}
    SubjectService.prototype.save = function (subject) {
        database_1.subjects.push(subject);
    };
    SubjectService.prototype.list = function () {
        return database_1.subjects;
    };
    SubjectService.prototype.getById = function (id) {
        for (var _i = 0, subjects_1 = database_1.subjects; _i < subjects_1.length; _i++) {
            var subject = subjects_1[_i];
            if (subject.id == id) {
                return subject;
            }
        }
        throw new Error("Não encontrou a Disciplina");
    };
    return SubjectService;
}();
exports.SubjectService = SubjectService;
},{"../database":47}],44:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
var Registry = /** @class */function () {
    function Registry(student, subjects) {
        this.student = student;
        this.subjects = subjects;
    }
    return Registry;
}();
exports.Registry = Registry;
},{}],45:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryService = void 0;
var database_1 = require("../database");
var RegistryService = /** @class */function () {
    function RegistryService() {}
    RegistryService.prototype.save = function (registry) {
        database_1.registries.push(registry);
    };
    return RegistryService;
}();
exports.RegistryService = RegistryService;
},{"../database":47}],26:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StudentService_1 = require("../student/StudentService");
var SubjectService_1 = require("../subject/SubjectService");
var Registry_1 = require("./Registry");
var RegistryService_1 = require("./RegistryService");
var selectStudent = document.getElementById("selectStudent");
var selectSubject = document.getElementById("selectSubject");
var frmRegistry = document.getElementById("frmRegistry");
var subjectService = new SubjectService_1.SubjectService();
function save(event) {
    event.preventDefault();
    try {
        var studentService = new StudentService_1.StudentService();
        var registryService = new RegistryService_1.RegistryService();
        var student = studentService.getById(Number(frmRegistry.selectStudent.value));
        var subjects = [];
        var formData = new FormData(frmRegistry);
        for (var _i = 0, _a = formData.getAll("subjects"); _i < _a.length; _i++) {
            var id = _a[_i];
            var subject = subjectService.getById(Number(id));
            subjects.push(subject);
        }
        var registry = new Registry_1.Registry(student, subjects);
        registryService.save(registry);
    } catch (error) {
        alert(error);
    }
}
function listSubject() {
    for (var _i = 0, _a = subjectService.list(); _i < _a.length; _i++) {
        var subject = _a[_i];
        selectSubject.innerHTML = selectSubject.innerHTML + ("\n    <option value=" + subject.id + "> " + subject.name + " </option>\n    ");
    }
}
listSubject();
function listStudent() {
    var studentService = new StudentService_1.StudentService();
    for (var _i = 0, _a = studentService.listStudent(); _i < _a.length; _i++) {
        var student = _a[_i];
        selectStudent.innerHTML = selectStudent.innerHTML + ("<option value=" + student.id + "> " + student.getName() + " - " + student.course.name + " </option>\n");
    }
}
listStudent();
frmRegistry.addEventListener("submit", save);
},{"../student/StudentService":43,"../subject/SubjectService":40,"./Registry":44,"./RegistryService":45}],52:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60520' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[52,26])
//# sourceMappingURL=/dist/7bd1a8588c423c9977582f4d424a34a0.map