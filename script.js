function toggleSection(sectionId, contentId) {
    var section = document.getElementById(sectionId);
    var content = document.getElementById(contentId);
    section === null || section === void 0 ? void 0 : section.addEventListener('click', function () {
        content === null || content === void 0 ? void 0 : content.classList.toggle('hidden-content');
        section.classList.toggle('expanded');
    });
}
window.onload = function () {
    toggleSection('toggleEducation', 'educationContent');
    toggleSection('toggleSkills', 'skillsContent');
    toggleSection('toggleLanguage', 'languageContent');
};
