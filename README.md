# Random Quote Machine

The Random Quote Machine is a simple web application that displays random quotes and allows users to tweet their favorite quotes.

![Random Quote Machine Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)

## Features

- Display a random quote from the [Quotable API](https://quotable.io/).
- Click the "New Quote" button to fetch and display a new random quote.
- Click the "Tweet Quote" button to share the displayed quote on Twitter.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your computer. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

	```
		git clone https://github.com/your-username/random-quote-machine.git
	```

2. Navigate to the project directory:

	```
		cd random-quote-machine
	```

3. Install project dependencies:

	```
		npm install
	```

## Usage

1. Start the development server:

	```
		npm start
	```

2. Open your web browser and visit http://localhost:3000 to view the Random Quote Machine.

3. Click the "New Quote" button to fetch and display a new random quote.

4. Click the "Tweet Quote" button to share the displayed quote on Twitter.

## Built With

* React - JavaScript library for building user interfaces.
* Material-UI - React UI framework for designing responsive web applications.
* react-tsparticles - React component for particle animations.
* axios - Promise-based HTTP client for making API requests.
* Quotable API - API for random quotes.