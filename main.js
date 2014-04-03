/*
 * The MIT License (MIT)
 * Copyright (c) 2014 Lance Campbell. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, regexp: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
    "use strict";
    
    // Brackets modules
    var AppInit         = brackets.getModule("utils/AppInit"),
        CommandManager  = brackets.getModule("command/CommandManager"),
        Menus           = brackets.getModule("command/Menus");
    
    // Constants
    var COMMAND_NAME    = "Run Extension Test Code",
        COMMAND_ID      = "lkcampbell.runTestCode",
        DEBUG_MENU      = "debug-menu";
    
    // Event handlers
    function runTestCode() {
        // Put any test code you want to run here.
        console.log("**PUT TEST CODE HERE**");
    }
    
    // Initialize extension
    AppInit.appReady(function () {
        // Register Run Test Code command and add it to Debug menu
        CommandManager.register(COMMAND_NAME, COMMAND_ID, runTestCode);
        Menus.getMenu(DEBUG_MENU).addMenuItem(COMMAND_ID);
    });
});
