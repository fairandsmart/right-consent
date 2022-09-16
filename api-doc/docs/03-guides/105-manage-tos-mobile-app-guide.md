# Manage Terms Of Services in mobile app using Right Consents

Learn how to integrate a terms of service **consent form** in a native Android mobile application using Right Consents **backoffice**.

- Use the knowledge you gain on previous guides
- Create Terms of service using the backoffice web application and use it in a mobile application

## Prerequisites

To complete this guide you need :

- Roughly 45 minutes
- A running Right Consents environment
- A complete installation of Android Studio and its dependencies

## Overview

In this guide you will integrate a newly created consent form, including terms of service, in a mobile application.

This guide also covers some basic aspects of designing consent form layout by assembling your consent library elements in various way.


## Installation

### Fair&Smart Docker Environment

Please make sure to have a running configured stack with all the components needed to run a local instance of Right Consents. The tutorial can be found [**here**](../getting-started/quick-start-guide)

### Keycloak

In order to enable a redirection back to the application after sign-in/login you will need to modify the keycloak client configuration.

First, go to the **consent-manager-gui** client configuration, it can be found [**here**](http://localhost:4285/auth/admin/master/console/#/realms/RightConsents/clients/f047bc78-924d-4db0-bdf9-90b3294a5375)

On the client page you will see, under the **Settings** section, an input field named **Valid Redirect URIs**. Please make sure to add the following URI

```text
fs://oauthresponse*
```

### Android Studio

An up-to-date installation of **Android Studio** is **required** to run the Android application.
Visit the [Android Studio's website](https://developer.android.com/studio) to complete the installation of the software.


### Import the project to Android Studio

You now have Android Studio up and running.

The first step is to download the Android application source code. It can be found on the source repository on [GitHub](https://fairandsmart.github.com) or by running the following command in your terminal

```bash
$ git clone https://gitlab.fairandsmart.tech/opensource/manage-tos-mobile-app-guide.git
```

Import the newly downloaded project into Android Studio, proceed as follows:

- Click **File** > **New** > **Import Project**.
- In the window that appears, navigate to the **root directory** of the project you want to import.
- Click **OK**.

Android Studio then opens the project in a new IDE window and indexes its contents. 

### Create an Android Emulator

The project is now imported to Android Studio. You will need a virtual device, called an emulator, to run the Android application locally. Few steps are needed to create it, a complete tutorial is available on the Android Studio website [**here**](https://developer.android.com/studio/run/managing-avds#createavd).

Here is an example of a created emulator in Android studio :
- OS version : **Android 11.0**
- Device type : **Google Pixel 5**
- Orientation : **Portrait**

![Manage Terms of Service Guide - Configuration](/img/managetosguide-emulator.png)

## Configuration

This guide presents a use case on how to create **Terms Of Service** using the Right Consents community platform and how to implement them to an **Android Application**

### Create terms of service

:::info

 For the full presentation of the backoffice please visit the [Quick start guide](../getting-started/quick-start-guide)

:::

Terms of service can be created by using the backoffice interface and initialize a **conditions** data model.

To begin, please proceed to the backoffice website localted [**here**](http://localhost:4286) with the following credentials:

- Username: demo@demo.com
- Password: demo42

Go to the **Terms and Conditions** library located under the **Configuration** section


In the Configuration section you should be able to open the **Terms and Conditions** sub section and click on the plus in order to create a new one.

Choose a relevant name and description for that model (only for internal management). After model creation, a key is allocated to that model (conditions.001) that you'll have to use later as a reference to that model. Then you can populate the model data content. One single model can have multiple version of data content.

Exemple of data content: 
```text
- Title: Android application Terms of Service
- Body: The following Terms of Service
        Agreement (the "TOS") is a legally binding agreement that shall govern the relationship
        with our users and others which may interact or interface with the Application and its services
- Behaviour: Check or Uncheck the box depending on the wanted behaviour
```

:::info

For full documentation about Terms Of Service data model please visit the [Consent Elements Doc](../concepts/models#terms-and-conditions-data-model)

:::

Now you are ready for publishing that version of the conditions model by clicking on 'Save Draft' button and then on the 'Activate' button.

By activating the version you will be able to use it for collecting consent. As soon as a consent is collected using that version of the conditions model, you will no longer be able to delete it.

Information about model lifecycle is visible in the top of the right panel. You may notice that version 1.0 is active and that a unique serial number has been allocated to that particular version.

If you perform modification on that model you will have to activate the next version and a popup will ask you for a Major or Minor release evolution. A Major one will result in considering already collected consent with that conditions to be stalled whereas a Minor one will be compatible with already collected consent but will replace previous one in the next generated consent transaction.

### Implementation

Terms of service are now created, published and activated. You can now use it in this Android Application in just few steps:

- Open the project in Android Studio 
- In the file explorer, locate the file name `CmApiConfig.kt` (Under  **app** > **java** > **com.fs.managetosmobileapp** > **config** folder)
- Insert the key corresponding to the Terms of Service data model

```kotlin
object ConsentManagerConfig {
    const val baseUrl = "http://10.0.2.2:4287"
    const val redirectUri = "fs://tos"

    const val conditionsKey = "conditions.001" <- Key of Terms of Service
}
```

### Run the application

The application is configured, the consent context including the newly created Terms of Service is implemented. The last thing to do before testing the application is to start the Android Studio emulator created [**here**](#create-an-android-emulator)

Please proceed as follows :
- In the toolbar, select **app** from the run configurations drop-down menu.
- From the target device drop-down menu, select the device that you have created.
- Click on the **run** button, symbolized by a green triangle

That's it you have launch the application locally on your emulator.

:::info

To get further informations on how to start an emulator using Android studio, please refer to the official [website](https://developer.android.com/studio/run#basic-build-run)

:::


## Application 

The application is now running, the Right Consents Community environment is set. Let's dive in the application workflow and how to generate consent forms that includes the Terms of Service created.

### Workflow

By starting the application, you will initiate the login/sign-up process. The application will open a webview that redirects the user to the Keycloak website. 

The user can :
- Create a new account using his personal information
- Use an existing account to log in the application

![Login page - Android Application](/img/managetosguide-keycloak.png)

Once the identification phase done, the application will verify if the connected user as already submitted a consent that includes the Terms of Service. This is done by retrieving the connected user records and checking if the latest submitted consent value is **valid**

If the user has already submitted a consent, the Main page will be shown (normal behaviour), if not a new non-closable webview will be open showing the corresponding consent page. The user will not be able to return to the main page if the consent is not submitted.

![Consent page - Android Application](/img/managetosguide-consent.png)

At any time, the user can access to consent created earlier to review it. A webview similar to the previous one will be shown.

:::info

If the Terms of Service data model is updated with a major version published, the consent will revoked. Consequences are that the application will show the consent form to the user. The user will be unable to access the application if no consent is submitted

To see further information about conditions data model please view the above [section](#create-terms-of-service)

:::

By retrieving user records the application can also display content accordingly. If a user has accepted or declined the application Terms of Service, a message will be displayed according to the response. Same behaviour for any records that is irrelavant and out of date.

![Main page - Android Application](/img/managetosguide-main.png)


### Retrieve Consent Records

The final step, in order to access consents records created using the Android application, go to the [Back office](http://localhost:4286) under the page **Integration > Search**.

Here, you can access the consent records generated by users and filter them by entry and value entry like so:

![Search consent records - Back office](/img/managetosguide-records-search.png)

Then click on search, a list of consent will be displayed on a table.

From here you can export all the consent records generated by clicking on the **export** button:

![Export consent records - Back office](/img/existing-form-records-export.png)

A .CSV file will be created, containing all the information linked to the user consent record (Record key, Record value, Email Address, ...).


