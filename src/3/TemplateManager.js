//Read only file
class TemplateManager {
  render(templateBody) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div id="template-container">
        ${templateBody}
      </div>
    `;
    return div;
  }
}

export default new TemplateManager();
