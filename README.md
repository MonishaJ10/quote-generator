# QuoteGenerator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



import pandas as pd
from datetime import datetime

# Get today's date
date_base = datetime.today().strftime('%Y%m%d')

# Input CSV file path
input_file = "kondorfx_4035.csv"  # Make sure this matches your actual CSV filename

# Define keyword groups
group_1_keywords = ['PF-AF01', 'PF-AN19', 'PF-002011', 'PF-NOR18']
group_2_keywords = ['ALM-LO', 'TREAS-DU', 'TREAS-BU', 'TREAS-LO', 'BNPPFCTLAY', 'GRS-PA', 'SBIRD-PAR']
group_3_keywords = ['GAP', 'DF', 'BNPPCB', 'BNPPSCF', 'POSCENT-PA', 'TREASUR-PA']

# Read the CSV
df = pd.read_csv(input_file)

# Create masks
mask1 = df['89'].isin(group_1_keywords)
mask2 = df['89'].isin(group_2_keywords)
mask3 = df['89'].isin(group_3_keywords)

# Filter and save
df[mask1].to_csv(f'KONDORGA_4035_{date_base}.csv', index=False)
df[mask2].to_csv(f'KONDORBN_4835_{date_base}.csv', index=False)
df[mask3].to_csv(f'KONDORGA_4035A_{date_base}.csv', index=False)

# Rows not matching any group
df[~(mask1 | mask2 | mask3)].to_csv(f'KONDORTP_4835_{date_base}.csv', index=False)


import os

if os.path.exists(input_file):
    print("CSV file found.")
else:
    print("CSV file NOT found. Check the file name or path.")

