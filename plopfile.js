module.exports = function (plop) {

    plop.setGenerator('controller', {
        description: 'application controller',

        // inquirer prompts
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Controller name?'
        }],

        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'plop-templates/component.jsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                templateFile: 'plop-templates/component.module.scss.hbs',
            },
        ]
    })

}