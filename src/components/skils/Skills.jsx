import { useTranslation } from 'react-i18next';
import DarkVeil from '../animated/Background';

const Chip = ({ label }) => (
    <span
        className="inline-flex items-center px-4 py-1.5 rounded-full
                   text-[11px] md:text-xs font-semibold tracking-wide
                   bg-[#3b3b3b] text-[#fdfdfd] shadow-md"
    >
        {label}
    </span>
);

const SkillCategory = ({ label, items }) => (
    <div className="w-full border-b border-[#f6e68b]/70 pb-6 mb-6 last:mb-0 last:border-b-0 bg-transparent">
        <p className="text-[24px] font-bold tracking-[0.22em] uppercase text-[#3b3b3b] mb-5 bg-transparent">
            {label}
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8 bg-transparent">
            {items.map((item) => (
                <Chip key={item} label={item} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const { t } = useTranslation();

    const frontend = t('skills.frontend', { returnObjects: true });
    const backend = t('skills.backend', { returnObjects: true });
    const databases = t('skills.databases', { returnObjects: true });
    const tools = t('skills.tools', { returnObjects: true });
    const languages = t('skills.languages', { returnObjects: true });

    return (
        <section
            id="skills"
            className="relative w-full py-16 px-4 overflow-hidden bg-[#ffde4d]"
        >
            {/* Particles background */}
            <div className="absolute inset-0 z-0 bg-transparent">
                <DarkVeil  />
            </div>

            {/* İçerik */}
            <div className="relative z-10 bg-transparent mx-8">
                <SkillCategory
                    label={t('skills.frontendTitle')}
                    items={frontend}
                />
                <SkillCategory
                    label={t('skills.backendTitle')}
                    items={backend}
                />
                <SkillCategory
                    label={t('skills.databaseTitle')}
                    items={databases}
                />
                <SkillCategory label={t('skills.toolsTitle')} items={tools} />
                <SkillCategory
                    label={t('skills.languagesTitle')}
                    items={languages}
                />
            </div>
        </section>
    );
};

export default Skills;
