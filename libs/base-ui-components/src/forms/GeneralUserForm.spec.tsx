import { render, screen, fireEvent } from '@testing-library/react';
import { GeneralUserForm, GeneralFormValues } from './GeneralUserForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type TestComponentProps = {
    initial?: GeneralFormValues;
    onFormDataChange?: (value: GeneralFormValues) => void;
  };

const TestComponent: React.FC<TestComponentProps> = ({
    initial,
    onFormDataChange,
  }: TestComponentProps) => {
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
        formId='test-form'
      />
    );
  };

// test('renders form with all required fields', () => {
//   render(<TestComponent />);
//   const field1Input = screen.getByPlaceholderText('field 1');
//   const field2Input = screen.getByPlaceholderText('field 2');
//   const field3Select = screen.getByPlaceholderText('field 3');
//   const submitButton = screen.getByText('Submit');

//   expect(field1Input).toBeIn
//   expect(field2Input).toBeInTheDocument();
//   expect(field3Select).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// });

test('submits the form when submit button is clicked', () => {
  render(<TestComponent />);
  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  // add assertions for form submission
});