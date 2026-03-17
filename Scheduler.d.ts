import { SectionContent } from "../site/SectionContent";
import { Study } from "../data/study/Study";
export declare class AddDropdownMenus {
    private sectionContent;
    constructor(sectionContent: SectionContent);
    addStudy(target: Element): Promise<void>;
    private addStudyView;
    addQuestionnaire(study: Study, target: Element): Promise<void>;
    private addQuestionnaireView;
    private newButton;
    private duplicateButton;
}
