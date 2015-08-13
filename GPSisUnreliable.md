# GPS is Unreliable #
Date: 2015-08-12

In the forums I am always reiterating this, today I decide to put some links together to as evidence to this. Into Google I entered [GPS is unreliable](https://www.google.com/search?q=GPS+is+unreliable)

1. **[GPS Evidence Too Unreliable For Legal Purposes](http://www.informationweek.com/location-services/gps-evidence-too-unreliable-for-legal-purposes/d/d-id/1079120?)**
> GPS devices can be easily jammed and their data can be spoofed, particularly when tied to cellular systems, experts argue.

2. **[GPS Watch Can Be an Unreliable Running Partner](http://www.nytimes.com/2011/12/20/health/nutrition/gps-watches-may-not-track-runs-accurately.html?pagewanted=all&_r=0)**
> It seems clear enough that a GPS watch is not very accurate, yet online runners? forums, like one at the Web site of Runners World, are filled with comments from confused athletes who rely on the devices. One poster, for example, ran a half marathon and wore a GPS watch that said the distance was 12.8 miles instead of 13.1.  

3. **[GPS Trackers For 4,000 High-Risk Offenders Were Really Unreliable: California Officials](http://www.businessinsider.com.au/gps-tracking-flaws-california-criminals-2013-4)**
> When officials began testing the anklets used to track 4,000 offenders in late 2011, they found a variety of problems: cracked cases, batteries that died early, and locations that were off by as much as three miles, according to the Times.

4. **[Android GPS Location Speed Unreliable](http://stackoverflow.com/questions/11685842/android-gps-location-speed-unreliable)**
> I have worked on GPS hardware since more then 7 years now. The accuracy reading is also not 100% accurate. Manufacturers state accuracy along with the system used for measuring it. CEP, RMS, 2DRMS, and R95 are some of the systems.

5. **[Why Are Smartphones Unreliable GPS Tracking Devices?](http://www.teamtrailways.com/why-are-smartphones-unreliable-gps-tracking-devices/)**
> White paper (pdf) by Trailways team

## Sources of GPS signal errors ##
Source: [What is GPS?](http://www8.garmin.com/aboutGPS/)

Factors that can degrade the GPS signal and thus affect accuracy include the following:

* Ionosphere and troposphere delays - The satellite signal slows as it passes through the atmosphere. The GPS system uses a built-in model that calculates an average amount of delay to partially correct for this type of error.
* Signal multipath - This occurs when the GPS signal is reflected off objects such as tall buildings or large rock surfaces before it reaches the receiver. This increases the travel time of the signal, thereby causing errors.
* Receiver clock errors - A receiver's built-in clock is not as accurate as the atomic clocks onboard the GPS satellites. Therefore, it may have very slight timing errors.
* Orbital errors - Also known as ephemeris errors, these are inaccuracies of the satellite's reported location.
* Number of satellites visible - The more satellites a GPS receiver can "see," the better the accuracy. Buildings, terrain, electronic interference, or sometimes even dense foliage can block signal reception, causing position errors or possibly no position reading at all. GPS units typically will not work indoors, underwater or underground.
* Satellite geometry/shading - This refers to the relative position of the satellites at any given time. Ideal satellite geometry exists when the satellites are located at wide angles relative to each other. Poor geometry results when the satellites are located in a line or in a tight grouping.
* Intentional degradation of the satellite signal - Selective Availability (SA) is an intentional degradation of the signal once imposed by the U.S. Department of Defense. SA was intended to prevent military adversaries from using the highly accurate GPS signals. The government turned off SA in May 2000, which significantly improved the accuracy of civilian GPS receivers.

## Comments from GPS Professionals on Google Groups ##

Source: [Google Groups](https://groups.google.com/forum/#!topic/phonegap/qrI_XvKeCLY)

Jesse,

That's a good collection of information you pulled together.  I think it's critical that people using GPS technologies understand how the overall system works and what it's limitations are.  If somebody thinks they can get an instantaneous, high precision "fix" every time they turn on their device then they may be in for a rude shock.  Let me share some observations I've made based on prior projects and dealing with customer expectations and reactions:

1) GPS is based on a collection of geo-synchronous satellites and in order to get a "fix" the GPS receiver must be able to locate a signal from multiple satellites; the more the better the fix.  Acquiring more satellites requires more time.  Weather conditions and receiver location will impact the receiver's ability to locate satellites.  
2) If you need a more accurate fix, you can sample the API for a period of time and look at the accuracy of the results.  Throw away new results that are less accurate than your most accurate for some period of time or until you've received a result with a level of accuracy that satisfies your requirements.
3) There are various grades of receiver that get different levels of precision.  The chipsets in commercial celllular phones are much less accurate than commercial, survey or military grade equipment.  I can easily imagine a watch, with fixes being accurate to only +/- 12 meters or so, being off by a distance of a half mile trying to measure distance over the course of a marathon.  That doesn't surprise me at all.
4) Location services in cellular devices (in particular I'm thinking of Google's) may use a combination of technologies to provide you a fix.  In addition to the GPS satellites the service will use approaches such as cell tower triangulation and IP geo-location services to provide you a result.  Both of these are going to be generally less accurate than a GPS fix, but they're likely to return faster results.  If you have all of these options enabled in your device, you're likely to see a broadly accurate geo location first, and then after a couple of minutes it will zero in on your location.  Apps such as Google Maps on Android will show you a big light-blue circle around your location which is an indicate that you're getting a generalized location.  Later, after it acquires GPS satellites the blue circle goes away and you just see your location which is still only accurate to a few meters (generally).

So yeah, technologies that you can hold in your hand which require communication with multiple satellites 26,000 miles in outer space will sometimes have their issues.  Our challenge is to apply the right technologies based on the customer's requirements, and also to educate and set appropriate expectations.  Maybe a running watch shouldn't have a feature that purports to accurately distance traveled when it's accuracy is never going to be better than +/- 10 meters and the user is going to travel 26 miles.  Or maybe the user should know the limitations of the technology.  I think a big part of the problem with expectations is that most people got their introduction to GPS by watching smart bombs fall down chimneys on CNN.  They were watching the most expensive and accurate version of the technology do it's thing.  Now they buy a running watch for $149.99 and expect the same level of results.

Jim

