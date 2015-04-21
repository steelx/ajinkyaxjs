---
layout: single
title: "Install Photoshop CS6 on Ubuntu"
description: "First blog post, and here is my update on my favorite MEANstack"
author: "Ajinkya"
coverImg: "ubuntu-photoshop-cs6.jpg"
---

#Install Photoshop CS6 on Ubuntu

I had posted this article back in 2014 on ajwebdesigner.in blog, but re-writting it again since I have closed that website. Or you can read my old [AskUbuntu Answer](http://askubuntu.com/questions/244795/how-to-install-photoshop-cs6/348280#348280) .

![photoshop-cs6-in-ubuntu](https://cloud.githubusercontent.com/assets/3184210/7249242/a41bca84-e836-11e4-9098-4f8d55b25e26.png)


You can install Photoshop CS6 on Ubuntu using WINE1.5 or above.
I followed this guide and Im using Photoshop CS6 on my ubuntu 13.04


Enter the following commands into a terminal (press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>)


	#wine setup
	```sh
	sudo add-apt-repository ppa:ubuntu-wine/ppa
	sudo apt-get update
	sudo apt-get install wine1.5
	```
	
	#change wine prefix
	```sh
	rm -rf .wine
	WINEARCH=win32 WINEPREFIX=~/.wine winecfg
	```
	
	#get winetricks script
	```sh
	wget http://kegel.com/wine/winetricks
	```
	
	#setup dependencies
	```sh
	sh winetricks -q atmlib gdiplus ie6 vcrun2005sp1 vcrun2008 fontsmooth-rgb	corefonts msxml3 msxml6 vcrun2010
  ```
  
	#copy dll’s from windows
	#Download DLL here : http://www.mediafire.com/?2zix528zkye5vky 	
  ```sh
	cp ~/odbc32.dll ~/.wine/drive_c/windows/system32/
	cp ~/odbcint.dll ~/.wine/drive_c/windows/system32/
	```

	#photoshop setup
	#You can download Photoshop CS6 [here](https://kickass.to/adobe-photoshop-cs6-13-1-2-extended-repack-p2p-t7744263.html)

  ```sh
	wine Setup.exe
	```
	
	#fontsmooth setup
	```sh
	winetricks fontsmooth-rgb
	```
	
	#run photoshop
	```sh
	wine '/home/ajinkya/.wine/drive_c/Program Files/Adobe/Adobe Photoshop CS6/Photoshop.exe'
	
	```

<a class="lightbox" href="https://cloud.githubusercontent.com/assets/3184210/7249243/a41c071a-e836-11e4-8a0a-7cd9e34f2e7f.jpg">
<img src="https://cloud.githubusercontent.com/assets/3184210/7249242/a41bca84-e836-11e4-9098-4f8d55b25e26.png" alt="photoshop-cs6-in-ubuntu"></a>
