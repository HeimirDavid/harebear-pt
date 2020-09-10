# Generated by Django 3.1 on 2020-09-10 11:36

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_google_maps.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GroupCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('upload_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Grouptraining',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('subheader', models.CharField(blank=True, max_length=300, null=True)),
                ('description', models.TextField()),
                ('date', models.CharField(blank=True, max_length=200, null=True)),
                ('price', models.IntegerField()),
                ('address', django_google_maps.fields.AddressField(max_length=200)),
                ('geolocation', django_google_maps.fields.GeoLocationField(max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images')),
                ('upload_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('slug', models.SlugField(unique=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='grouptraining.groupcategory')),
            ],
        ),
    ]
