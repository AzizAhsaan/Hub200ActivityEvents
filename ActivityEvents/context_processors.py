def navigation_links(request):
    navigation_links = [
        {'text': 'Home', 'href': 'home'},
        {'text': 'Events', 'href': 'events'},
        {'text': 'Calendar', 'href': 'calendar'},
        {'text': 'Registrations', 'href': 'registrations'},

    ]
    return {'navigationlinks': navigation_links}