import {
  GeneralUserForm,
  type GeneralFormValues,
  GeneralUserTable,
} from '@libs/base-ui-components';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Typography, Divider } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export const Form2 = () => {
  const [tableData, setTableData] = useState<GeneralFormValues[]>([]);
  const formInstance = useForm<GeneralFormValues>({
    mode: 'onChange',
  });
  const { handleSubmit } = formInstance;

  const onSubmit: SubmitHandler<GeneralFormValues> = async (
    data: GeneralFormValues
  ) => {
    setTableData([...tableData, data]);
  };

  const submit = handleSubmit(onSubmit);
  return (
    <div className="w-full h-full" data-testid="home-page">
      <Title>Second Form</Title>
      <Paragraph>
        Essentially this example demontrates the two text box, one dropdown, a
        table and a submit button on a page.
      </Paragraph>

      <Divider />
      <Paragraph>Enter details in the form below, then press submit</Paragraph>
      <GeneralUserForm
        formInstance={formInstance}
        onSubmit={submit}
        formId="test-form-2"
      />

      <Divider />
      <Paragraph>The resulting data will be displayed below.</Paragraph>
      <GeneralUserTable data={tableData} />
      <Divider />
      <Link
        to="/"
        className="py-2 px-10 bg-charcoal rounded-lg hover:bg-charcoal/40"
      >
        <span className="text-white text-lg font-bold uppercase">
          Back to home
        </span>
      </Link>
    </div>
  );
};
