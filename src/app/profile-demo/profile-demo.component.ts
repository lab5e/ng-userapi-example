import { Component, OnInit } from '@angular/core';
import { ProfileService, Configuration, ConfigurationParameters } from '@lab5e/ng-userapi-t0';

@Component({
  selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.css']
})

export class ProfileDemoComponent implements OnInit {
  token: string = "";
  name: string = "";
  email: string = "";
  avatarUrl: string = "";
  errorMessage: string = "";

  // The profileService is automagically created by Angular. There's some setup
  // required in the app.module.ts as well.
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  loadProfile(): void {
    // Assign the token here. This can be done in the app module file as well
    this.profileService.configuration.credentials['APIToken'] = this.token;

    // Retrieve the profile
    this.profileService.userGetUserProfile().subscribe((profile) => {
      // Success - update the properties on the component and clear any error
      this.name = profile.name;
      this.email = profile.email;
      this.avatarUrl = profile.avatarUrl;
      this.errorMessage = "";
    },
      (error) => {
        // Set the error message string if there's an error
        this.errorMessage = JSON.stringify(error.error);
      });
  }
}
