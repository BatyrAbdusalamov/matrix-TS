import { useEffect, useState } from 'react';
import { getFirstOptions, getSecondOptions } from '../api';
import Button from '../components/Button';
import Select, { OnChange } from '../components/Select';
import ShowError from '../components/ShowError';
import { ThemeProvider } from '../context/theme';
import { useForm } from '../hooks';
import { saveSettings } from '../utils';
import { MockFistOptions } from '../api/mock/firstOptions';
import { MockSecondOption } from '../api/mock/secondOptions';
import { Theme } from '../Global';

const HomePage: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(window.appSettings.theme);

  const [firstOptions, setFirstOtions] = useState<MockFistOptions[]>([]);
  const [selectedFirstOption, setSelectedFirstOption] = useState<MockFistOptions | null>(null);

  const [error, setError] = useState<string>('');

  const [secondOptions, setSecondOptions] = useState<MockSecondOption[]>([]);
  const [selectedSecondOption, setSelectedSecondOption] = useState<MockSecondOption | null>(null);

  const [nameForm, setName] = useForm({ firstName: '', lastName: '' });

  const getOptions = async () => {
    try {
      const data = await getFirstOptions();
      setFirstOtions(data);
    } catch (error) {
      setError(String(error));
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const onChangeFirstOption: OnChange = async (value) => {
    if(!value){
    setSelectedFirstOption(value);
    }
    if (value == null) {
      setSelectedSecondOption(null);
    }

    const data: MockSecondOption[] = await getSecondOptions({ id: value?.id ? value.id : null });
    setSecondOptions(data);
  };

  const onChangeSecondOption: OnChange = async (value) => {
    if(!value){
    setSelectedSecondOption(value);
    }
  };

  const handleChangeNameForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setName(name, value);
  };

  const onHideError = () => {
    setError('');
    getOptions();
  };

  const saveForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? 'dark' : 'light';
      saveSettings('theme', next);
      return next;
    });
  };

  return (
    <ThemeProvider value={[theme, setTheme]}>
      <form>
        <div>
          Select first type:&nbsp;
          <Select
            options={firstOptions}
            selected={selectedFirstOption}
            onChange={onChangeFirstOption}
          />
        </div>
        {selectedFirstOption != null && (
          <div>
            Select second type:&nbsp;
            <Select
              labelKey="label"
              options={secondOptions}
              selected={selectedSecondOption}
              onChange={onChangeSecondOption}
            />
          </div>
        )}
        <br />
        <div>
          <div>
            First Name&nbsp;
            <input
              type="text"
              name="firstName"
              value={nameForm.firstName}
              onChange={handleChangeNameForm}
            />
          </div>
          <br />
          <div>
            Last Name&nbsp;
            <input
              type="text"
              name="lastName"
              value={nameForm.lastName}
              onChange={handleChangeNameForm}
            />
          </div>
        </div>
        <br />
        <Button variant="secondary" onClick={toggleTheme}>
          <span>Toggle them</span>
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={saveForm}
          type="submit"
          disabled={error !== ''}
        >
          <span>Save form</span>
        </Button>
        <br />
        <ShowError delay={1000} show={error !== ''} onHide={onHideError}>
          <p>{error}</p>
        </ShowError>
      </form>
    </ThemeProvider>
  );
};

export default HomePage;
