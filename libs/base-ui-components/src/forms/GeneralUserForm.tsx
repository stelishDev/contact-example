import { Button, Input, Select } from 'antd';
import { Controller, UseFormReturn } from 'react-hook-form';
import { fieldNameRegex } from './regex';

export type GeneralFormValues = {
  field1: string;
  field2: string;
  field3: string;
};

export type GeneralUserFormProps = {
  formInstance: UseFormReturn<GeneralFormValues>;
  onSubmit: () => void;
  formId: string;
};

export const GeneralUserForm = ({
  formId,
  formInstance,
  onSubmit,
}: GeneralUserFormProps) => {
  const { control, setValue } = formInstance;
  return (
    <form id={formId} onSubmit={onSubmit} className="py-2">
      <div className="flex flex-1 space-x-2 pb-2 max-w-[500px]">
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              allowClear
              id="field1"
              maxLength={15}
              {...field}
              placeholder="field 1"
            />
          )}
          name="field1"
          rules={{
            required: 'Field value is required',
            pattern: {
              value: fieldNameRegex,
              message: 'Field value is required',
            },
          }}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <Input
              allowClear
              id="field2"
              maxLength={15}
              {...field}
              placeholder="field 2"
            />
          )}
          name="field2"
          rules={{
            required: 'Field value is required',
            pattern: {
              value: fieldNameRegex,
              message: 'Field value is required',
            },
          }}
        />
        <Controller
          control={control}
          name="field3"
          render={({ field: { value } }) => (
            <Select
              value={value}
              placeholder="field 3"
              className="min-w-[120px]"
              onChange={(evt) => setValue(`field3`, evt)}
            >
              <Select.Option value="option1">Option 1</Select.Option>
              <Select.Option value="option2">Option 2</Select.Option>
              <Select.Option value="option3">Option 3</Select.Option>
              <Select.Option value="option4">Option 4</Select.Option>
            </Select>
          )}
        />
      </div>

      <Button type="default" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};
