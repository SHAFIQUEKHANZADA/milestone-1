function toggleSection(sectionId: string, contentId: string) {
    const section = document.getElementById(sectionId);
    const content = document.getElementById(contentId);
    
    section?.addEventListener('click', () => {
        content?.classList.toggle('hidden-content');
        section.classList.toggle('expanded');
    });
}

window.onload = () => {
    toggleSection('toggleEducation', 'educationContent');
    toggleSection('toggleSkills', 'skillsContent');
    toggleSection('toggleLanguage', 'languageContent');
};
