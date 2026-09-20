export type ChangeStepFn = () => void;

export interface OrderStepProps
{
    prevStep: ChangeStepFn,
    nextStep: ChangeStepFn,
}