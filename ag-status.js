const fs = require('fs');
const path = require('path');

const STATUS_FILE = path.join(__dirname, '..', 'ag-monitor', 'status.json');

function updateAgStatus(task, step, progress = 0) {
    try {
        let content = JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
        
        content.project = "AVC Website v2";
        content.task = task;
        content.step = step;
        content.progress = progress;
        content.lastUpdate = new Date().toLocaleTimeString();
        content.internal.activity = "Antigravity Active in AVC";
        content.internal.currentTool = "Web Development";
        
        fs.writeFileSync(STATUS_FILE, JSON.stringify(content, null, 2));
    } catch (e) {
        // Если файла нет, просто пропускаем
    }
}

module.exports = { updateAgStatus };
