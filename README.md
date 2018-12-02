# EasyuiAngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 目录结构
├── src  
│   ├── app  
│   │   ├── core                                # 核心模块  
│   │   │   ├── i18n  
│   │   │   ├── net  
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器  
│   │   │   ├── services  
│   │   │   │   └── startup.service.ts          # 初始化项目配置  
│   │   │   └── core.module.ts                  # 核心模块文件  
│   │   ├── layout                              # 通用布局  
│   │   ├── routes  
│   │   │   ├── **                              # 业务目录  
│   │   │   ├── routes.module.ts                # 业务路由模块  
│   │   │   └── routes-routing.module.ts        # 业务路由注册口  
│   │   ├── shared                              # 共享模块  
│   │   │   └── shared.module.ts                # 共享模块文件  
│   │   ├── app.component.ts                    # 根组件  
│   │   └── app.module.ts                       # 根模块    
│   ├── assets                                  # 本地静态资源  
│   ├── environments                            # 环境变量配置  
│   ├── styles                                  # 样式目录  
└── └── style.less                              # 样式引导入口