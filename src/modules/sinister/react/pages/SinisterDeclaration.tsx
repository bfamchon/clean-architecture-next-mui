'use client';

import { FormStep } from '@/modules/sinister/core/entity/sinister.domain-model';
import { selectStep } from '@/modules/sinister/core/selectors/step.selector';
import { ActiveStep, Step } from '@/modules/sinister/react/components/steps/Step';
import { InsuranceContractSection } from '@/modules/sinister/react/sections/insurance-contract/InsuranceContractSection';
import { SubmitterSection } from '@/modules/sinister/react/sections/submitter/SubmitterSection';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const steps = ['Contrat', 'Souscripteur', 'Courtier', 'Construction', 'Sinistre', 'Pièces', 'Validation'];

export const Sinister = () => {
  const stepNumber = useSelector(selectStep);
  const renderStep = (step: string, index: number) => {
    if (index + 1 === stepNumber) {
      return <ActiveStep key={step}>{step}</ActiveStep>;
    }
    return <Step key={step}>{step}</Step>;
  };
  return (
    <Box sx={{ marginTop: 2 }}>
      {/* <Box sx={{ margin: 2 }}>
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
          {steps.map((step, index) => renderStep(step, index))}
        </ol>
      </Box> */}
      {stepNumber === FormStep.INSURANCE_CONTRACT && <InsuranceContractSection />}
      {stepNumber === FormStep.SUBMITTER && <SubmitterSection />}
    </Box>
  );
};
