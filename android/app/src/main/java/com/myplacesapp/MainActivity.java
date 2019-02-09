package com.myplacesapp;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.google.android.gms.ads.MobileAds;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MobileAds.initialize(this, "ca-app-pub-0073961265435848~6394818233");
    }
}
