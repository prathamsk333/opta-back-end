site is live at: https://opta.prathamsk.me
First, run the development server:

npm run dev

Opta Express Website Implementation This README provides an overview of the features implemented in the Opta Express website.

Features Implemented

User Authentication (Signup & Login) Integrated user authentication, including login and signup functionality, allowing users to securely access their accounts.
Once the user sings Up then the user get's a welcome Email!!!
Location Entry (Mandatory on Signup) Implemented a location prompt immediately upon sign-up, where users can either: Manually enter their location, or Use automatic location detection. Location input is required initially but can be modified if needed.
Addresses Page Created an Addresses page where users can view all saved addresses. Display of recently used addresses based on the creation date of each address (no purchase data is used to determine this as purchase functionality isn't implemented).
Add New Address Built an Add Address feature, allowing users to input and save new addresses, adhering to all necessary requirements provided.
Address Details and Update Added a dedicated page to view address details. Integrated update functionality so users can edit and save changes to existing addresses.

NOTE - I've used mapbox API and i'll be hosting this website soon 
NOTE - The frontend repository is seperate it's in https://github.com/prathamsk333/opta-front-end
NOTE - once you run npm run dev copy the email folder inside dist folder which gives welcome email once the user singup's for the first time

I've also implemented update profile and reset profile but not implimented in front-end
