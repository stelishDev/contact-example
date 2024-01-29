import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { GeneralFormValues, GeneralUserForm } from './GeneralUserForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const meta = {
  title: 'Forms/GeneralUserForm',
  component: GeneralUserForm,
} satisfies Meta<typeof GeneralUserForm>;
export default meta;

type Story = StoryObj<typeof GeneralUserForm>;

type StoryComponentProps = {
    initial?: GeneralFormValues;
    onFormDataChange?: (value: GeneralFormValues) => void;
  };

const StoryComponent: React.FC<StoryComponentProps> = ({
    initial,
    onFormDataChange,
  }: StoryComponentProps) => {
    const formInstance = useForm<GeneralFormValues>({
      defaultValues: initial,
      mode: "onChange",
    });
    const formData = formInstance.watch();
  
    useEffect(() => {
      if (onFormDataChange) {
        onFormDataChange(formData);
      }
    }, [onFormDataChange, formData]);
  
    return (
      <GeneralUserForm
        formInstance={formInstance}
        onSubmit={() => {}}
        formId='sb-form'
      />
    );
  };
  
  export const Default: Story = {
    render: () => <StoryComponent />,
  };
