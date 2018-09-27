{
    // Используйте IntelliSense, чтобы узнать о возможных атрибутах.
    // Наведите указатель мыши, чтобы просмотреть описания существующих атрибутов.
    // Для получения дополнительной информации посетите: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(lldb) Launch Math Editor",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/bin/godot.osx.tools.64",
            "args": ["-e", "--path", "/Users/jjay/proj/kidsapp/game/"],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "lldb"
        },
        {
            "name": "(lldb) Launch Math Game",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceFolder}/bin/godot.osx.tools.64",
            "args": ["--path", "/Users/jjay/proj/kidsapp/game/"],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "environment": [],
            "externalConsole": true,
            "MIMode": "lldb"
        }
    ]
}